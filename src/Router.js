import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchBar from "./templates/SearchBar";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repos/:user" component={SearchBar} />
    </Switch>
  </Router>
);

export default AppRouter;
