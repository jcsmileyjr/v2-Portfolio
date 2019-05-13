import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

import '../App.css';

export default function Project(props){

    const displayObjectives = props.projectObjectives.map(objectives => <li>{objectives}</li>);
    const displayTech = props.projectTechStack.map(tech => <li>{tech}</li>);
    const displayDevelopment = props.projectDevelopment.map(process => <li>{process}</li>);
    //const displayTech = projects[0].techStack.map((tech, index)=><li key={index}>{tech}</li>)

    return(
        <Container>
            <h1 className="center rowWhiteSpace">{props.projectTitle}</h1>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"10px"}} src={require("../img/car-boy.jpg")} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center">Project Objectives</h3>
                    <ul>{displayObjectives}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={require("../img/lotscars-app.jpg")} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center">My Role in the Project</h3>
                    <ul>{props.projectMyRole}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={require("../img/twocar-app.jpg")} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center">Tech Stack and Tools</h3>
                    <ul>{displayTech}</ul>
                </Col>                
            </Row> 
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={require("../img/redcar-app.jpg")} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center">Development Process</h3>
                    <ul>{displayDevelopment}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={require("../img/car-peoples.jpg")} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center">Results</h3>
                    <ul>{props.projectResults}</ul>
                </Col>                
            </Row>                                                  
        </Container>
    );
}