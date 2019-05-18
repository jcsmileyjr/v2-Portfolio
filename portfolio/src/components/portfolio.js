import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer } from '@fortawesome/free-solid-svg-icons'

library.add(faSwimmer);

export default function Portfolio(props){
    return(
        <Container >
            <Row className="center rowWhiteSpace"><Col><h1>Portfolio</h1></Col></Row>
            <Row>
                <Col className="spaceBetweenPortfolioCards" xs={12} md={4} >
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Android Mobile Photo App for Edge Motors Car Museum</Card.Title>
                        <Card.Img
                                className="equalImgHeight" 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/car-boy.jpg")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'react']} size="lg" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"orange"}} icon={['fab', 'html5']} size="lg" />
                                    <Card.Text>HTML5</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'css3']} size="lg" />
                                    <Card.Text>CSS3</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"green"}} icon={['fab', 'js']} size="lg" />
                                    <Card.Text>JavaScript</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">Paid Freelance project completed in April of 2019</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Edge Motors Museum")}} variant="link" >Read Case Study</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <strong>The code is private to my employer</strong>
                                </Col>                                
                            </Row>                             
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="spaceBetweenPortfolioCards" xs={12} md={4}>
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Chasing the 10 Pound Monster</Card.Title>
                        <Card.Img 
                                className="equalImgHeight"
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/10MON2.png")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"red"}} icon={['fab', 'angular']} size="lg" />
                                    <Card.Text>AngularJS</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"purple"}} icon={['fab', 'bootstrap']} size="lg" />
                                    <Card.Text>Bootstrap</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"green"}} icon={['fab', 'node']} size="lg" />
                                    <Card.Text>Node/Express</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"black"}} icon={['fab', 'github']} size="lg" />
                                    <Card.Text>GitHub</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">A biggest loser style web app designed specifically for my workplace. The objective is to be the first player to lose 10 pounds.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/10MON" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://jcsmileyjr.github.io/10MON/#!/logIn" variant="link" >Visit Project Demo</Button>
                                </Col>                                
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Chasing the 10 Pound Monster")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                           
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="spaceBetweenPortfolioCards" xs={12} md={4}>
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Active Cases</Card.Title>
                        <Card.Img 
                                className="equalImgHeight"
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/active-case1.png")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                        <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'react']} size="lg" />
                                        <Card.Text>React</Card.Text>
                                    </Col>
                                    <Col className="center" xs={6} >
                                        <FontAwesomeIcon style={{color:"purple"}} icon={['fab', 'bootstrap']} size="lg" />
                                        <Card.Text>Bootstrap</Card.Text>
                                    </Col>
                                    <Col className="center" xs={6} >
                                        <FontAwesomeIcon style={{color:"green"}} icon={['fab', 'node']} size="lg" />
                                        <Card.Text>Node/Express</Card.Text>
                                    </Col>
                                    <Col className="center" xs={6} >
                                        <FontAwesomeIcon icon={['fab', 'css3']} size="lg" />
                                        <Card.Text>CSS3</Card.Text>
                                    </Col>
                                </Row> 
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">A case management app designed to keep the user informed of the current status of each case and allow management of the user's portfolio of cases.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/active-cases" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://active-cases.herokuapp.com/" variant="link" >Visit Project Demo</Button>
                                </Col>                                 
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Active Cases")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                              
                        </Card.Body>
                    </Card>
                </Col>
                {/* Row 2*/}
                <Col className="spaceBetweenPortfolioCards" xs={12} md={4} >
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Agent-Pedia</Card.Title>
                        <Card.Img 
                                className="equalImgHeight"
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/agentpedia-version2-b-compressor.png")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"red"}} icon={['fab', 'angular']} size="lg" />
                                    <Card.Text>AngularJS</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"black"}} icon={['fab', 'github']} size="lg" />
                                    <Card.Text>GitHub</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"green"}} icon={['fab', 'node']} size="lg" />
                                    <Card.Text>Node/Express</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <Card.Text></Card.Text>
                                    <Card.Text>MatrializeCSS</Card.Text>
                                </Col>                                                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">Online field guide for gaming law enforcment agents.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/agent-guide" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://jcsmileyjr.github.io/agent-guide/" variant="link" >Visit Project Demo</Button>
                                </Col>                                 
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Agent-pedia")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                             
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="spaceBetweenPortfolioCards" xs={12} md={4}>
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Index Cards</Card.Title>
                        <Card.Img
                                className="equalImgHeight" 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/Index Cards Landing Page.png")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"red"}} icon={['fab', 'angular']} size="lg" />
                                    <Card.Text>AngularJS</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"black"}} icon={['fab', 'github']} size="lg" />
                                    <Card.Text>GitHub</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"orange"}} icon={['fab', 'html5']} size="lg" />
                                    <Card.Text>HTML5</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"purple"}} icon={['fab', 'bootstrap']} size="lg" />
                                    <Card.Text>Bootstrap</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">A biggest loser style web app designed specifically for my workplace. The objective is to be the first player to lose 10 pounds.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/Index-Cards" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://jcsmileyjr.github.io/Index-Cards/" variant="link" >Visit Project Demo</Button>
                                </Col>                                 
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Index-Cards")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                           
                        </Card.Body>
                    </Card>
                </Col> 

                <Col className="spaceBetweenPortfolioCards" xs={12} md={4}>
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Wheel of Fortune (mobile app)</Card.Title>
                        <Card.Img
                                className="equalImgHeight" 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/wheel-of-fortune.gif")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'react']} size="lg" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"black"}} icon={['fab', 'github']} size="lg" />
                                    <Card.Text>GitHub</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"orange"}} icon={['fab', 'html5']} size="lg" />
                                    <Card.Text>HTML5</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'css3']} size="lg" />
                                    <Card.Text>CSS3</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">A math practice app for a child.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/WheelOfFortuneMobile" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://snack.expo.io/@jcsmileyjr/wheel-of-fortune" variant="link" >Visit Project Demo</Button>
                                </Col>                                 
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Wheel of Fortune")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                           
                        </Card.Body>
                    </Card>
                </Col> 

                <Col className="spaceBetweenPortfolioCards" xs={12} md={4}>
                    <Card className="h-100">
                        <Card.Title className="center equalTitleHeight">Calculator (mobile app)</Card.Title>
                        <Card.Img
                                className="equalImgHeight" 
                                variant="top"
                                fluid ={true}                         
                                src={require("../img/Calculator.gif")} />
                        <Card.Body>
                            <Row className="equalTechHeight">
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'react']} size="lg" />
                                    <Card.Text>React Native</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"black"}} icon={['fab', 'github']} size="lg" />
                                    <Card.Text>GitHub</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"orange"}} icon={['fab', 'html5']} size="lg" />
                                    <Card.Text>HTML5</Card.Text>
                                </Col>
                                <Col className="center" xs={6} >
                                    <FontAwesomeIcon style={{color:"navy"}} icon={['fab', 'css3']} size="lg" />
                                    <Card.Text>CSS3</Card.Text>
                                </Col>                                                                                                                                                               
                            </Row>
                            <Card.Subtitle className="rowWhiteSpace equalObjHeight">A math practice app for a child.</Card.Subtitle>                        
                            <Row>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://github.com/jcsmileyjr/Calculator" variant="link" >View GitHub Code</Button>
                                </Col>
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button href="https://snack.expo.io/@jcsmileyjr/calculator" variant="link" >Visit Project Demo</Button>
                                </Col>                                 
                                <Col xs={{span:9, offset:2}} sm={{span:6, offset:5}} md={{span:10, offset:1}} lg={{span:10, offset:2}}>
                                    <Button onClick={() => {props.showCaseStudy("Calculator")}} variant="link" >Read Case Study</Button>
                                </Col>                                
                            </Row>                           
                        </Card.Body>
                    </Card>
                </Col>                                                                              
            </Row>

        </Container>
    );
}