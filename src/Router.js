import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repository from "./pages/Repository";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:user" component={Repository} />
    </Switch>
  </Router>
);

export default AppRouter;
