import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

import '../App.css';
import resume from '../img/JC Smiley 2 Page Alpha.pdf';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faSwimmer);

export default function Intro(props){
    return(
        <Container fluid={true} >
            <Row className="introContainer introImage showMobileImage">
                <div className="introTitle">
                    <h1>JC Smiley</h1>
                    <h3>Software Developer & Tech Meetup Organizer</h3>
                    <Row>
                        <Col xs={4}>
                            <FontAwesomeIcon style={{backgroundColor:"black"}} icon={['fab', 'linkedin']} size="lg" />
                            <br/>
                            <Button href="https://​linkedin.com/in/jcsmileyjr " variant="Link" style={{color:"white"}}>LinkedIn</Button>
                        </Col> 
                        <Col  xs={4}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                            <br/>
                            <Button href="https://twitter.com/JCSmiley4" variant="Link" style={{color:"white"}}>Twitter</Button>
                        </Col>
                        <Col  xs={4}>
                            <FontAwesomeIcon style={{backgroundColor:"black"}} icon={['fab', 'github']} size="lg" />
                            <br/>
                            <Button href="https://github.com/jcsmileyjr" download variant="Link" style={{color:"white"}}>GitHub</Button>
                        </Col>                                                    
                    </Row>      
                    <Button href={resume} className="rowWhiteSpace" variant="primary">Download Resume PDF</Button>
                </div>
            </Row>
            <Row>                
                <Col xs={12} md={{span:8, offset:2}}>
                    <h2 className="center rowWhiteSpace" style={{color:"navy"}}>Featured Project</h2>
                    <h5 className="center">Android Mobile Photo App for Edge Motors Car Museum</h5>
                    <Card>
                        <Card.Img 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/car-boy.jpg")} />
                        <Card.Body>
                            <Row>
                                <Col className="center" xs={6} sm={3}>
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'react']} size="lg" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col className="center" xs={6} sm={3}>
                                    <FontAwesomeIcon style={{color:"orange"}} icon={['fab', 'html5']} size="lg" />
                                    <Card.Text>HTML5</Card.Text>
                                </Col>
                                <Col className="center" xs={6} sm={3}>
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'css3']} size="lg" />
                                    <Card.Text>CSS3</Card.Text>
                                </Col>
                                <Col className="center" xs={6} sm={3}>
                                    <FontAwesomeIcon style={{color:"green"}} icon={['fab', 'js']} size="lg" />
                                    <Card.Text>JavaScript</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace center">Paid Freelance project completed in April of 2019</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:6, offset:3}} lg={{span:6, offset:4}}>
                                    <Button onClick={() => {props.showCaseStudy("Edge Motors Museum")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                             
                        </Card.Body>
                    </Card>
                </Col>
            </Row>            
        </Container>       
    );
}