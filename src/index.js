import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./features/app/App";
import AnalyticBoard from "./features/analytic-bord/analytic-board";
import Clock from "./features/clock/clock";
import Home from "./features/home/home";
import { GlobalStyle } from "./features/app/global-style";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/analytics" component={AnalyticBoard} />
      <Route path="/clock" component={Clock} />
      <Route component={Home} />
    </Switch>

    <GlobalStyle />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
