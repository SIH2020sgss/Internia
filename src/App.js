import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AppliedInternships from "./components/appliedInternships/AppliedInternships";
import SearchInternships from "./components/searchInternships/SearchInternships";
import Home from "./components/home/Home";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/applied" component={AppliedInternships} />
          <Route path="/search" component={SearchInternships} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
