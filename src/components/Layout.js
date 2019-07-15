import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { NavMenu } from "./NavMenu";

export class Layout extends Component {
  pageTitle = Layout.name;

  render() {
    return (
      <Container fluid>
        <NavMenu />
        {this.props.children}
      </Container>
    );
  }
}
