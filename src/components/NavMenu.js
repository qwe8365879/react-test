import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.scss";

export class NavMenu extends Component {
  pageTitle = NavMenu.name;

  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#home">App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to={"/"} exact>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/albums"}>
              <Nav.Link>Albums</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
