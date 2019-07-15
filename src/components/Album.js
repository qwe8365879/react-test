import React, { Component } from 'react'
import { Card, Jumbotron, Container, Spinner, Row, Col, Button } from "react-bootstrap";

export class Album extends Component {
    pageTitle = Album.name;

    state = {
        album: {},
        photos: []
      };
    
    constructor(props) {
        super(props);
        this.onEditAlbum = this.onEditAlbum.bind(this);
        this.onNewPhoto = this.onNewPhoto.bind(this);
        this.onDeletePhoto = this.onDeletePhoto.bind(this);
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums/"+this.props.match.params.id)
        .then(res => res.json())
        .then((data) => {
            this.setState({album: data})
        })
        .catch(console.error);

        fetch("https://jsonplaceholder.typicode.com/albums/"+this.props.match.params.id+"/photos")
        .then(res => res.json())
        .then((data) => {
            this.setState({photos: data})
        })
        .catch(console.error);
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>{this.pageTitle} {this.state.album.id}</h1>
                        <p>
                            {this.state.album.title}
                        </p>
                        <p>
                            <Button variant="secondary" onClick={() => this.onEditAlbum()}>Edit</Button>
                            <Button variant="primary">Upload</Button>
                        </p>
                    </Container>
                </Jumbotron>
                <Row>
                {
                    this.state.photos.length > 0 ? this.state.photos.map((photo) => (
                    <Col key={photo.id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={photo.thumbnailUrl}/>
                            <Card.Body>
                                <Card.Title>{photo.title}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="danger" onClick={() => this.onDeletePhoto(photo.id)}>Delete</Button>
                            </Card.Footer>
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
        )
    }

    onEditAlbum() {

    }

    onNewPhoto() {

    }

    onDeletePhoto(id) {
        this.state.photos.splice(this.state.photos.findIndex((i) => {
            return i.id === id;
        }), 1);
        this.setState({
            photos: this.state.photos
        });
    }
}
