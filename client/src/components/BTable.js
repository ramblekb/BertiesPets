// import { Button } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// eslint-disable-next-line no-unused-vars
import API from "../utils/API";
import { DataGrid } from '@material-ui/data-grid';
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
  // DataGrid,
  Typography,
  TablePagination,
  TableFooter,
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

// let USERS = [ ], STATUSES = ['Active', 'Pending', 'Blocked'];
// for(let i=0; i<14; i++) {
// USERS[i] = {
//    name: faker.name.findName( ),
//    email: faker.internet.email( ),
//    phone: faker.phone.phoneNumber( ),
//    jobtitle: faker.name.jobTitle( ),
//    company: faker.company.companyName( ),
//    joinDate: faker.date.past( ).toLocaleDateString( 'en-US' ), 
//    status: STATUSES[Math.floor(Math.random( ) * STATUSES.length)]
// }
// }

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

  const classes = useStyles();
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
                <DataGrid container>
                  <DataGrid item lg={2}>
                    <Avatar alt={pet.name} src="." className={classes.avatar} />
                  </DataGrid>
                  <DataGrid item lg={10}>
                    <Typography className={classes.name}>{pet.name}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      {pet.email}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {pet.phone}
                    </Typography>
                  </DataGrid>
                </DataGrid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {pet.jobTitle}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {pet.company}
                </Typography>
              </TableCell>
              <TableCell>{pet.joinDate}</TableCell>
              <TableCell>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (pet.status === "Active" && "green") ||
                      (pet.status === "Pending" && "blue") ||
                      (pet.status === "Blocked" && "orange"),
                  }}
                >
                  {pet.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
//             pagination
//   pageSize={5}
//   rowCount={100}
            component="div"
            count={rowsPerPage.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPag={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default BTable;
