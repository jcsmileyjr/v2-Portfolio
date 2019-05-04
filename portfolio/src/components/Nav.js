import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container >
            <Row className="aboveOverlay">
            <Col className="center">
                    <Button variant="link">Home</Button>
                </Col>
                <Col className="center">
                    <Button variant="link">Project</Button>
                </Col>
                <Col className="center">
                    <Button variant="link">About</Button>
                </Col>
            </Row>
        </Container>       
    );
}