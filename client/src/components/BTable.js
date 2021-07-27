import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  // TablePagination,
  TableFooter,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));


// make new object with now info and then do the put 
// if e.status = sold change it to available


function BTable(props) {
  // initialize state
  const [pets, setPets] = useState([]);

  // hnadle the event of the user clicking the status button to purchase a pet
  function handleButtonClick(e) {
    // store our information about the selected pet in variables
    let petStatus = e.target.attributes.getNamedItem('data-status').value;
    let name = e.target.name;
    let species = e.target.attributes.getNamedItem('data-species').value
    let id = e.target.id
   
    // condition to check the value of the petStatus // if it's currently available, then switch to pending, if pending then switch to sold, if sold then switch to available
    if (petStatus === "available") {
      petStatus = "pending"
    } else if (petStatus === "sold") {
      petStatus = "available"
    } else if (petStatus === "pending") {
      petStatus = "sold"
    } 
    // build an object in order to make a put request to update the selected pet
    const petObj = {
      name: name,
      status: petStatus,
      species: species,
      _id: id
    }
    
    // update the pet in the database while retaining all unchanged data
    API.updatePet(id, petObj).then((res) => {
    //  call load pets to alter state to trigger a rerender
     loadPets();
    })
  
  }

  // load all pets from database
  function loadPets() {
    API.getPets().then( (response) => {
      setPets(response.data);
    });
  }
  // acts like componentDidMount, fires when the page first loads
  useEffect(() => {
    loadPets();
  }, []);

  // initialize styles
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Pet Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Species</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          {/* Map through the pets state and generate a row in the table for every pet */}
          {pets.map((pet) => (
            <TableRow key={pet.name}>
              <TableCell >
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar className={pet.name} src="." className={classes.avatar} />
                  </Grid>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{pet.name}</Typography>
                    {/* <Button color="textSecondary" variant="body2">
                      {pet.status}
                    </Button> */}
                    <Typography color="textSecondary" variant="body2">
                      {pet.photoUrl}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              
              <TableCell>{pet.species}</TableCell>
              <TableCell>
                <button
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (pet.status === "available" && "green") ||
                      (pet.status === "pending" && "blue") ||
                      (pet.status === "sold" && "orange"),
                  }} 
                  alt="click this button to purchase pet" 
                  onClick={handleButtonClick}
                  id={pet._id}
                  data-species={pet.species}
                  name={pet.name}
                  data-status={pet.status}
                >
                  {pet.status}
                </button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default BTable;