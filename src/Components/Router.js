import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Books from "Routes/Books";
import Search from "Routes/Search";
import DetailMedia from "Routes/DetailMedia";
import DetailBooks from "Routes/DetailBooks";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/books" exact component={Books} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" component={DetailMedia} />
        <Route path="/show/:id" component={DetailMedia} />
        <Route path="/book/:isbn" exact component={DetailBooks} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
