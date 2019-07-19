import React from "react";
import { Route, Switch } from "react-router-dom";

import Repos from "../../pages/Repos";
import Commits from "../../pages/Commits";

const Routes = () => (
  <Switch>
    <Route path="/repos/:user" exact component={Repos} />
    <Route path="/repos/:user/:repo/commits" exact component={Commits} />
  </Switch>
);

export default Routes;
