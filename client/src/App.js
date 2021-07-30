import { CallMissedSharp } from "@material-ui/icons";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Container } from "@material-ui/core";
import BTable from './components/BTable';
import PList from './pages/PList';
import ThirdPage from './pages/ThirdPage';
import Navmenu from './components/Navmenu';


function App() {
  return (
    <Router>
    <div>
      <nav className= 'nav-link'>
      <h1>Bertie's Pets</h1>
        <ul>
          <li>
          <Link to="/BTable">All Pets</Link>
          </li>
          <li>
            <Link to="/available">Available List</Link>
          </li>
          <li>
            <Link to="/PList">Pending List</Link>
          </li>
          <li>
            <Link to="/ThirdPage">Sold List</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/available">
          <available />
        </Route>
        <Route path="/PList">
<Container maxWidth="sm" >


</Container>
        </Route>
        <Route path="/BTable">
          <BTable />
        </Route>
        <Route path="/ThirdPage">
        <ThirdPage></ThirdPage>
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function btable() {
return <h2>BTable</h2>;
}

function available() {
return <h2>available</h2>;
}

function pending() {
return <h2>pending</h2>;
}

function sold() {
  return <h2>sold</h2>;
  }

export default App;
