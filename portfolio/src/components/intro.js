import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer } from '@fortawesome/free-solid-svg-icons'

library.add(faSwimmer);

export default function Intro(props){
    return(
        <Container fluid={true} >
            <Row className="introContainer introImage showMobileImage">
                <div className="introTitle">
                    <h1>JC Smiley</h1>
                    <h3>Software Developer & Tech Meetup Organizer</h3>
                    <Row>
                        <Col xs={4}>
                            <FontAwesomeIcon icon="swimmer" />
                            <br/>
                            <Button href="#" variant="Link" style={{color:"white"}}>LinkedIn</Button>
                        </Col> 
                        <Col  xs={4}>
                            <FontAwesomeIcon icon="swimmer" />
                            <br/>
                            <Button href="#" variant="Link" style={{color:"white"}}>Twitter</Button>
                        </Col>
                        <Col  xs={4}>
                            <FontAwesomeIcon icon="swimmer" />
                            <br/>
                            <Button href="#" variant="Link" style={{color:"white"}}>GitHub</Button>
                        </Col>                                                    
                    </Row>      
                    <Button className="rowWhiteSpace" variant="primary">Download Resume PDF</Button>
                </div>
            </Row>
            <Row>                
                <Col xs={12} md={{span:8, offset:2}}>
                <h2 className="center rowWhiteSpace" style={{color:"navy"}}>Featured Project</h2>
                <Card>
                    <Card.Title className="center">Android Mobile Photo App for Edge Motors Car Museum</Card.Title>
                    <Card.Img 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/car-boy.jpg")} />
                        <Card.Body>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon="swimmer" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon="swimmer" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon="swimmer" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon="swimmer" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace">Paid Freelance project completed in April of 2019</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:6, offset:3}} lg={{span:6, offset:4}}>
                                    <Button variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:6, offset:3}} lg={{span:6, offset:4}}>
                                    <Button variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                             
                        </Card.Body>
                    </Card>
                </Col>
            </Row>            
        </Container>       
    );
}