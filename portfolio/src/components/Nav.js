import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container className="navSection">
            <Row className="aboveOverlay">
            <Col className="center">
                    <Button variant="link" className="navButton">Home</Button>
                </Col>
                <Col className="center">
                    <Button variant="link" className="navButton">Projects</Button>
                </Col>
                <Col className="center">
                    <Button variant="link" className="navButton">About</Button>
                </Col>
            </Row>
        </Container>       
    );
}