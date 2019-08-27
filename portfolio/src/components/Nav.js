import React from 'react';
import { Container, Button, Navbar} from 'react-bootstrap';
import '../App.css';
import resume from "../img/JC Smiley Resume.pdf";

export default function Nav(props){
    return(
        <Container className="navSection">
            <Navbar className="navSection center" fixed="top">      
                    <Button onClick={props.showHomePage} variant="link" className="navButton" size="lg">Home</Button>
                    <Button onClick={props.showPortfolioPage} variant="link" className="navButton" size="lg">Portfolio</Button>
                    <Button onClick={props.showAboutPage} variant="link" className="navButton" size="lg">About</Button>
                    <Button href={resume} className="navButton" variant="link" size="lg">Download Resume</Button>
            </Navbar>
        </Container>       
    );
}