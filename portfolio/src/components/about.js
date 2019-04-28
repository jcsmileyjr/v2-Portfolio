import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import '../App.css';

export default function About(props){
    return(
    <Container>
            <Row className="center"><h1>About</h1></Row>
            <Row>
                <section>
                    <h3 className="center">Community Involvment</h3>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="../img/intro_meetup.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <p>Code Connector: Nonprofit tech organization that help connect beginners with coding and career resources. https://www.codeconnective.com</p>
                    <ul>
                        <li>Engagement Manager/Blog Editor </li>
                        <li>Memphis Chapter Leader (2 monthly meetups) </li>
                        <li>North Mississippi Chapter Co-founder (1 monthly meetups) </li>
                        <li>I was the lead presenter for an "Intro To Web Development" presentation that taught HTML, CSS, and touched on Javascript. I assisted the attendees through the basics of developing their first functional websites</li>
                    </ul>
                    
                    <p>Smart City Hackathon 2019</p>
                    <ul>
                        <li>​​Collaborated with a small team of 5 to build a mobile app (LookOut) in a single weekend.</li>
                        <li>The objective was to warn drivers of approaching EMS vehicles.</li>
                        <li>While the project wasn’t a  success, we experimented with React Native for app development and MIT app inventor to demo the app.</li>
                    </ul>                    
                    <p>Give-Camp 2019</p>
                    <ul>
                        <li>​Collaborated with a small team of 4 to build a WordPress website for a non-profit in a single weekend. (​https://www.sweetcheeksdiaperministry.org/​).</li>
                        <li>My contribution: using the WordPress Divi plugin to build web pages from wireframes.</li>
                    </ul>                    
                    <p>Hack-Memphis 2018</p>
                    <ul>
                        <li>Collaborated with a small team of 6 to build a web app (Posey) in a single weekend.</li>
                        <li>A  video recording app that use machine learning to compare a picture of a person posing to the user’s  pose. </li>
                        <li>My contribution: building the user interface (HTML/CSS/JS)</li>
                    </ul>

                    <h3 className="center">Blog Posts</h3>
                    <p> ​https://medium.com/codeconnective/hackathons-are-rewarding-experiences-ae3bd4d56d0d</p>

                    <h3 className="center">Meetups I Attend</h3>
                    <ul>
                        <li>DevMemphis</li>
                        <li>Memphis Web Workers</li>
                        <li>Code Connector</li>
                    </ul>

                    <h3 className="center">Hobbies</h3>
                    <ul>
                        <li>I love to garden. My favorite vegetables to plant is peppers, cucumbers, melons, green beans, lettuce,  and sweet potatoes.</li>
                        <li>I am a amature long-distance bicycle rider. The farthest I have ridden on a single ride is 30 miles.</li>
                        <li>I have fell in love with hiking. I have hiked most of the state parks in north Mississippi and around Memphis, TN.</li>
                    </ul>                    
                    
                </section>
                <section></section>
            </Row>
            
        </Container>
    );
}
