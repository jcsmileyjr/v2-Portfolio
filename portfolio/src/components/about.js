import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

export default function About(props) {
  return (
    <Container>
      <Row className="center">
        <Col className="whiteSpaceAboveFeatureArea">
          <h1>About</h1>
        </Col>
      </Row>
      <Row className="center rowWhiteSpace">
        <Col>
          <h3>Community Involvment</h3>
        </Col>
      </Row>
      <Row className="whiteSpaceBelowText">
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img variant="top" src={require("../img/cc_meetup2.jpg")} />
            <Card.Body>
              <Card.Title className="center">Code Connector</Card.Title>
              <Card.Subtitle className="center greyColor">
                Nonprofit Tech Meetup
              </Card.Subtitle>              
                <ul>
                  <li>Engagement Manager/Meetup Organizer </li>
                  <li>Memphis Chapter Leader (2 monthly meetups) </li>
                  <li>
                    North Mississippi Chapter Co-founder (1 monthly meetups)
                  </li>
                  <li>
                    I was the lead presenter for an "Intro To Web Development"
                    presentation that taught HTML, CSS, and touched on
                    Javascript. I assisted the attendees through the basics of
                    developing their first functional websites
                  </li>
                  <li>
                    <a href="https://codeconnector.io/">Code Connector</a>
                  </li>
                </ul>
              
            </Card.Body>
          </Card>
        </Col>
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img
              variant="top"
              src={require("../img/intro_meetup_small.jpg")}
            />
            <Card.Body>
              <Card.Title className="center">Give-Camp 2019</Card.Title>
                <ul>
                  <li>
                    ​Collaborated with a small team of 4 to build a WordPress
                    website for a non-profit in a single weekend. (​
                    <a href="https://www.sweetcheeksdiaperministry.org">
                      Sweet Cheeks Diaper Ministry
                    </a>
                    ).
                  </li>
                  <li>
                    My contribution: using the WordPress Divi plugin to build
                    web pages from wireframes.
                  </li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="whiteSpaceBelowText">
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img variant="top" src={require("../img/hackMemphis.jpg")} />
            <Card.Body>
              <Card.Title className="center">Hack-Memphis 2018</Card.Title>
                <ul>
                  <li>
                    Collaborated with a small team of 6 to build a web app
                    (Posey) in a single weekend.
                  </li>
                  <li>
                    A video recording app that use machine learning to compare a
                    picture of a person posing to the user’s pose.
                  </li>
                  <li>
                    My contribution: building the user interface (HTML/CSS/JS)
                  </li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img
              variant="top"
              src={require("../img/smartCityLookOut.jpg")}
            />
            <Card.Body>
              <Card.Title className="center">
                Smart City Hackathon 2019
              </Card.Title>
                <ul>
                  <li>
                    ​​Collaborated with a small team of 5 to build a mobile app
                    (LookOut) in a single weekend.
                  </li>
                  <li>
                    The objective was to warn drivers of approaching EMS
                    vehicles.
                  </li>
                  <li>
                    While the project wasn’t a  success, we experimented with
                    React Native for app development and MIT app inventor to
                    demo the app.
                  </li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="whiteSpaceBelowText">
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img variant="top" src={require("../img/presentation.jpg")} />
            <Card.Body>
              <Card.Title className="center">Blog Posts</Card.Title>
                <ul>
                  <li>
                    ​
                    <a href="https://medium.com/codeconnective/hackathons-are-rewarding-experiences-ae3bd4d56d0d">
                      Hackathons are rewarding experiences
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/codeconnective/what-app-should-i-build-90df747fe603?source=friends_link&sk=aa3802cebf0d8825b56ce6da14886763">
                      What app should I build
                    </a>
                  </li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img
              variant="top"
              src={require("../img/inaugural-meetup.jpg")}
            />
            <Card.Body>
              <Card.Title className="center">Meetups I Attend</Card.Title>
                <ul>
                  <li>​DevMemphis</li>
                  <li>Memphis Web Workers</li>
                  <li>Code Connector Memphis</li>
                  <li>Code Connector North Mississippi</li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="center whiteSpaceAboveFeatureArea">
        <Col>
          <h3>Hobbies</h3>
        </Col>
      </Row>
      <Row>
        <Col className="aboutCardCols" xs={12} lg={6}>
          <Card className="h-100 aboutCards">
            <Card.Img variant="top" src={require("../img/hike1.jpg")} />
            <Card.Body>
              <Card.Title className="center">Nature Enthusiastic</Card.Title>
                <ul>
                  <li>
                    I love to garden. My favorite vegetables to plant is
                    peppers, cucumbers, melons, green beans, lettuce, and sweet
                    potatoes.
                  </li>
                  <li>
                    I am a amature long-distance bicycle rider. The farthest I
                    have ridden on a single ride is 30 miles.
                  </li>
                  <li>
                    I fell in love with hiking. I have hiked most of the state
                    parks in north Mississippi and around Memphis, TN.
                  </li>
                </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
