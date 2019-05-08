import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';

import '../App.css';
import Project from './project';

//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faReact } from '@fortawesome/free-solid-svg-icons'
//library.add(faReact)


//<i class="fab fa-react"></i>

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
                    <Card.Title className="center">Android Mobile Photo App for Edge Motors Car Museum</Card.Title>
                    <Card.Img 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/car-boy.jpg")} />
                        <Card.Body>
                        <Card.Subtitle className="center rowWhiteSpace">Paid Freelance project completed in April of 2019</Card.Subtitle>                        
                            <ul>                                
                                <li>Build components with React Native, HTML, and CSS based on Adobe Photoshop and XD wireframes</li>
                                <li>Develop functionality with JavaScript to update the state, insert data to be displayed, and navigate between components</li>
                                <li>Test each component for user experience and functionality</li>
                                <li>Passed the initial stress test of 700 patrons on grand opening day</li>
                            </ul>                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>            
        </Container>       
    );
}