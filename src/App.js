import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Albums } from "./components/Albums";
import { Album } from "./components/Album";

import "./App.css";

export default class App extends Component {
  pageTitle = App.name;

  

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/albums" component={Albums} />
        <Route path={`/album/:id`} component={Album} />
      </Layout>
    );
  }
}
