import React from 'react';
import { Container, Row, Col, Button, Navbar} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container className="navSection">
            <Navbar className="navSection center" fixed="top">      
                    <Button variant="link" className="navButton">Home</Button>
                    <Button variant="link" className="navButton">Projects</Button>
                    <Button variant="link" className="navButton">About</Button>
            </Navbar>

        </Container>       
    );
}