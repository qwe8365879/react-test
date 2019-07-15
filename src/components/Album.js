import React, { Component } from 'react'
import { Card, Jumbotron, Container, Spinner, Row, Col, Button } from "react-bootstrap";
import { PhotoService } from "../share/PhotoService"
import { AlbumService } from "../share/AlbumService"

export class Album extends Component {
    pageTitle = Album.name;

    state = {
        album: {},
        photos: []
      };
    
    constructor(props) {
        super(props);
        this.photoService = new PhotoService();
        this.albumService = new AlbumService();
        this.onEditAlbum = this.onEditAlbum.bind(this);
        this.onNewPhoto = this.onNewPhoto.bind(this);
        this.onDeletePhoto = this.onDeletePhoto.bind(this);
    }
    
    componentDidMount() {
        this.albumService.getAlbum(this.props.match.params.id).then((data) => {
            this.setState({album: data})
        });
        this.photoService.getPhotoByAlbum(this.props.match.params.id).then((data) => {
            this.setState({photos: data})
        });
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
                    <Col xs={3} key={photo.id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={photo.thumbnailUrl}/>
                            <Card.Body>
                                <Card.Title>Photo {photo.id}</Card.Title>
                                <Card.Text>
                                {photo.title}
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
