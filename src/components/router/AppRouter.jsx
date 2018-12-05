import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../../pages/main/Main";
import About from "../../pages/about/About";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/about/" component={About} />
  </Switch>
);
export default AppRouter;
