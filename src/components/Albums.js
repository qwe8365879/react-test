import React, { Component } from "react";
import { Card, Button, Spinner, Row, Col } from "react-bootstrap";
// import { Route } from "react-router";
import { Route, Link } from "react-router-dom";

import { Album } from './Album'

export class Albums extends Component {
  pageTitle = Albums.name;

  state = {
    albums: []
  };

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then((data) => {
          this.setState({albums: data})
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        
        <h1>{this.pageTitle}</h1>
        <Row>
        {
            this.state.albums.length > 0 ? this.state.albums.map((album) => (
              <Col key={album.id}>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={album.thumbnailUrl}/>
                    <Card.Body>
                        <Card.Title>Album {album.id}</Card.Title>
                        <Card.Text>
                        {album.title}
                        </Card.Text>
                        <Link to={`/album/${album.id}`} className="btn btn-primary">View</Link>
                    </Card.Body>
                </Card>
              </Col>
            ))
            : 
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }
        </Row>
        
      </div>
    );
  }
}
