import React, {useEffect} from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

import '../App.css';

export default function Project(props){

    const displayObjectives = props.projectObjectives.map((objectives, index) => <li key={index}>{objectives}</li>);
    const displayTech = props.projectTechStack.map((tech, index) => <li key={index}>{tech}</li>);
    const displayDevelopment = props.projectDevelopment.map((process,index) => <li key={index}>{process}</li>);

    useEffect(()=> window.scrollTo(0, 0));

    return(
        <Container index="caseStudies">
            <Row>
                <Col>
                    <h1 className="center whiteSpaceAboveFeatureArea">{props.projectTitle}</h1>
                </Col>
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"10px"}} src={props.projectPhoto1} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center rowWhiteSpace">Project Objectives</h3>
                    <ul>{displayObjectives}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={props.projectPhoto2} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center rowWhiteSpace">My Role in the Project/Motivation</h3>
                    <ul>{props.projectMyRole}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={props.projectPhoto3} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center rowWhiteSpace">Tech Stack and Tools</h3>
                    <ul>{displayTech}</ul>
                </Col>                
            </Row> 
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={props.projectPhoto4} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center rowWhiteSpace">Development Process</h3>
                    <ul>{displayDevelopment}</ul>
                </Col>                
            </Row>
            <Row style={{marginBottom:"10px"}}>
                <Col xs={12} lg={6} >
                    <Image style={{marginTop:"13px"}} src={props.projectPhoto5} fluid />
                </Col>
                <Col xs={12} lg={6}>
                    <h3 className="center rowWhiteSpace">Results</h3>
                    <ul>{props.projectResults}</ul>
                </Col>                
            </Row>                                                  
        </Container>
    );
}