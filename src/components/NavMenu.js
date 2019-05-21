import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.scss';

export class NavMenu extends Component {
    pageTitle = NavMenu.name;

    render() {
        return (
            <Navbar>
                
                <Navbar.Brand>
                    <Link to={'/'}>App</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/'} >
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}