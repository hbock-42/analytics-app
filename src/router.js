import React from "react";
import AnalyticBoard from "./features/analytic-bord/analytic-board";
import Clock from "./features/clock/clock";
import Home from "./features/home/home";
import Posts from "./features/posts/posts.js";
import MenuShortcut from "./features/menu-shortcut/menu-shortcut";
import { GlobalStyle } from "./features/app/global-style";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/analytics" component={AnalyticBoard} />
      <Route path="/clock" component={Clock} />
      <Route path="/posts" component={Posts} />
      <Route component={Home} />
    </Switch>
    <GlobalStyle />
    <MenuShortcut />
  </Router>
);

export default routing;
