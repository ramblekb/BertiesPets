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

function handleButtonClick(e) {
  console.log(e.target.id)
  console.log(e.target.name)
  // console.log(e.target.petStatus)
  if
  API.put(e.target.id)
}
// make new object with now info and then do the put 
// if e.status = sold change it to available
// function handleButtonClick(e) {
//   e.preventDefault();
// this.setState(prevState => ({
//   isToggleOn: !prevState.isToggleOn
// }));
// }

function BTable() {
  const [pets, setPets] = useState([]);

  function loadPets() {
    API.getPets().then( (response) => {
      setPets(response.data);
    });
  }
  // Load all books and store them with setBooks
  useEffect(() => {
    loadPets();
  }, []);

  useEffect(() => {
    console.log(pets);
  }, [pets]);

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
            <TableCell className={classes.tableHeaderCell}>User Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Job Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              Birth Date
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>        
          {pets.map((pet) => (
            <TableRow key={pet.name}>
              <TableCell >
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar alt={pet.name} src="." className={classes.avatar} />
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
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {pet.id}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {pet.photoUrl}
                </Typography>
              </TableCell>
              <TableCell>{pet.joinDate}</TableCell>
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
                  name={pet.name}
                  petStatus={pet.status}
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
