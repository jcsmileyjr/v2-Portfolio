import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

import '../App.css';
import Project from './project';

export default function Intro(props){
    return(
        <Container fluid={true} >
            <Row className="introContainer introImage">
                <Col className="introTitle">
                    <h1>JC Smiley</h1>
                    <h3>Software Developer & Tech Meetup Organizer</h3>        
                    <Button variant="primary">Download Resume PDF</Button>
                </Col>
            </Row>
            <Row>                
                <Col xs={12} md={{span:8, offset:2}}>
                <h2 className="center rowWhiteSpace" style={{color:"navy"}}>Featured Project</h2>
                <Card>
                    <Card.Title  className="center">Android Photo App for Edge Motors Car Museum</Card.Title>
                    <Card.Img 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/car-boy.jpg")} />
                        <Card.Body>                        
                            <ul>
                                <li>Freelance project completed in April of 2019</li>
                                <li></li>
                            </ul>                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>            
        </Container>       
    );
}