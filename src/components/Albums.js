import React, { Component } from "react";
import { Card, Spinner, Row, Col } from "react-bootstrap";
import {Link } from "react-router-dom";
import { AlbumService } from "../share/AlbumService"

export class Albums extends Component {
  pageTitle = Albums.name;

  state = {
    albums: []
  };

  constructor(props) {
    super(props);
    this.AlbumService = new AlbumService();
  }

  componentDidMount() {
      this.AlbumService.getAllAlbums(1).then((data) => {
        this.setState({albums: data})
      });
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
