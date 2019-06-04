import "./global.scss";
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import PageNotFound from "./Errors/404";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
