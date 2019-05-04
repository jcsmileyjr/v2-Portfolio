import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container >
            <Row className="aboveOverlay">
                <Col className="center rowWhiteSpace">JC Smiley </Col>
                <Col className="center rowWhiteSpace">Projects</Col>
                <Col className="center rowWhiteSpace">About</Col>
            </Row>
        </Container>       
    );
}