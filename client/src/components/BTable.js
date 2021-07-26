import { Button } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// eslint-disable-next-line no-unused-vars
import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles' ;
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
TablePagination,
TableFooter
} from '@material-ui/core' ;
const useStyles = makeStyles((theme) => ({
   table: {
     minWidth: 650,
   },
 tableContainer: {
   borderRadius: 15,
   margin: '10px 10px' , 
   maxWidth: 950
 },
 tableHeaderCell: {
   fontWeight: 'bold' ,
   backgroundColor: theme.palette.primary.dark,
   color: theme.palette.getContrastText(theme.palette.primary.dark)
 },
 avatar: {
   backgroundColor: theme.palette.primary.light,
   color: theme.palette.getContrastText(theme.palette.primary.light)
 },
 name: {
     fontWeight: 'bold',
     color: theme.palette.secondary.dark
 },
 status: {
     fontWeight: 'bold',
     fontSize: '0.75rem',
     color: 'white',
     backgroundColor: 'grey',
     borderRadius: 8,
     padding: '3px 10px',
     display: 'inline-block'
 }
 }));
// eslint-disable-next-line no-unused-vars
function BTable() {
  const [pets, setPets] = useState([]);

  function loadPets() {
    Axios.get(
      "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
    ).then(function (response) {
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

  const classes = useStyles( );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value); 
    setPage(0);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Pet Name</th>
          <th>Pet Kind</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr>
            <td>1</td>
            <td>{pet.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BTable;
