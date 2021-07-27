import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pets from "./pages/Pets";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/Pets"]}>
            <Pets />
          </Route>
          <Route exact path="/Pets/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
