import React from 'react';
import { Container, Button, Navbar} from 'react-bootstrap';
import '../App.css';

export default function Nav(props){
    return(
        <Container className="navSection">
            <Navbar className="navSection center" fixed="top">      
                    <Button onClick={props.showHomePage} variant="link" className="navButton">Home</Button>
                    <Button variant="link" className="navButton">Projects</Button>
                    <Button onClick={props.showAboutPage} variant="link" className="navButton">About</Button>
            </Navbar>

        </Container>       
    );
}