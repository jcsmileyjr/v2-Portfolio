import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container >
            <Row className="aboveOverlay">
                <Col>JC Smiley </Col>
                <Col>Projects</Col>
                <Col>About</Col>
            </Row>
        </Container>       
    );
}