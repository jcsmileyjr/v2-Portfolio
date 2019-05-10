import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

import '../App.css';

export default function Project(props){
    return(
        <Container>
            <Row>
                <Col>
                <Card>
                <Card.Title>Android Photo App for a Car Museum</Card.Title>
                    <Card.Header className="projectImage"></Card.Header>
                    <Card.Body>                        
                        <Card.Subtitle>Paid PFreelance project for Edge Motors Museum</Card.Subtitle>
                        
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
}