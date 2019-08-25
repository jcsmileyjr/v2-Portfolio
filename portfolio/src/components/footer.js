import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.css';

export default function Footer(props){
    return(
        <Container fluid="false" className="whiteSpaceAboveFeatureAre footerStyling">
            <Row className="center">
                <Col>&#9400; by JC Smiley</Col>
            </Row>
        </Container>       
    );
}