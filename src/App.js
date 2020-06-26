import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import AppliedInternships from "./components/appliedInternships/AppliedInternships";
import SearchInternships from "./components/searchInternships/SearchInternships";
import Home from "./components/home/Home";
import InternshipDetails from "./components/internshipDetails/InternshipDetails";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "6em" }}>{""}</div>
        <Switch>
          <Route path="/applied" component={AppliedInternships} />
          <Route path="/search" component={SearchInternships} />
          <Route path="/internship-details" component={InternshipDetails} />
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
