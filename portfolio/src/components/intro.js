import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import '../App.css';

export default function Intro(props){
    return(
        <Container className="introContainer introImage">
            <Row className="introTitle">
                <Col index="intro">
                    <h1>JC Smiley</h1>
                    <h3>Software Developer & Tech Meetup Organizer</h3>        
                    <Button variant="primary">Download Resume PDF</Button>
                    <h3>Featured Project</h3>                
                </Col>
            </Row>
        </Container>       
    );
}