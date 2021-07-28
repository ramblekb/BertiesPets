import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import PetsIcon from '@material-ui/icons/Pets';
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  Container,
  TableHead,
  TableRow,
  // PetsIcon,
  Paper,
  // Avatar,
  Grid,
  Typography,
  // TablePagination,
  TableFooter,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  table: {
    width: '100%,'
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    margin: "auto"
  },
  
  tableHeaderName: {
    paddingLeft: 60,
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  tableHeaderCell: {
    margin: 'auto',
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  petsIcon: {
    fontSize: 'small',
    marginRight: 10,

    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    marginRight: 10,
    marginLeft: 20,
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  species: {
    fontWeight: "bold",
    color: theme.palette.secondary.light,
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
  // button: {
  //   fontSize: 'medium',
  // }
}));
// Main Objective: make new object with new info then call put operation with conditions such as if e.status = "sold" then change it to "available"

// functional component accepting props ie.properties object argument with data and returns an element
function BTable(props) {
  // initialize state
  const [pets, setPets] = useState([]);

  // handle the event of the user clicking the status button to purchase a pet
  function handleButtonClick(e) {
    // store our information about the selected pet in value 
     // The getNamedItem() method returns the attribute node with the specified name
    // A reference to the object on which the event originally occured 
    let petStatus = e.target.attributes.getNamedItem('data-status').value;
    let name = e.target.name;
    let species = e.target.attributes.getNamedItem('data-species').value
    let id = e.target.id
   
    // condition statement to check the value of the petStatus // if it's currently available, then switch to pending, if pending then switch to sold, if sold then switch to available
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
    
    // update the pet in the database while retaining all unchanged data with a promise method
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
    <Container fixed>
    <Paper className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderName}>Pet Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Species</TableCell>
            <TableCell className={classes.tableHeaderCell}>

            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
          {/* Map through the pets state and generate a row in the table for every pet */}
          {pets.map((pet) => (
            <TableRow className={classes.name} key={pet.name}>
              <TableCell >
                <Grid container>
                  <Grid item lg={2}>
                    <PetsIcon src={''} className={classes.petsIcon} />
                  </Grid>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{pet.name}</Typography>
                    {/* <Typography color="textSecondary" variant="body2">
                      {pet.photoUrl}
                    </Typography> */}
                  </Grid>
                </Grid>
              </TableCell>
              {/* SPECIES column */}
              <TableCell >
                <Grid container>
                  <Grid item lg={2}>
                  </Grid>
                  <Grid item lg={10}>
                    <Typography variant="body2" className={classes.species}>{pet.species}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <button
                  className={classes.status}
                  style={{ fontSize: 'medium',
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
    </Paper>
    </Container>
  );
}

export default BTable;