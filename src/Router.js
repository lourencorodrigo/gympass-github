import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Repos from "./pages/Repos";
import Commits from "./pages/Commits";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/repos/:user" exact component={Repos} />
      <Route path="/commits/:user/:repo" exact component={Commits} />
    </Switch>
  </Router>
);

export default AppRouter;
