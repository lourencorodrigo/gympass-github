import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repos from "./pages/Repos";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:user" component={Repos} />
    </Switch>
  </Router>
);

export default AppRouter;
