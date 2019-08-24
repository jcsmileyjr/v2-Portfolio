import React, {useEffect} from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import "../App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faSwimmer);

export default function Intro(props) {
  useEffect(()=> window.scrollTo(0, 0));
  return (
    <Container fluid={true}>
      <Row className="introContainer introImage showMobileImage">
        <div className="introTitle">
          <h1 className="enlargeTitle">JC Smiley</h1>
          <h3>Software Developer & Tech Meetup Organizer</h3>
          <h5>Angular | React | React Native</h5>
          <Row className="whiteSpaceAboveFeatureArea">
            <Col xs={4}>
              <a className="introSocialMediaLinks" href="https://​linkedin.com/in/jcsmileyjr ">
                <FontAwesomeIcon
                  style={{ backgroundColor: "black" }}
                  icon={["fab", "linkedin"]}
                  size="lg"
                />
              </a>
            </Col>
            <Col xs={4}>
              <a className="introSocialMediaLinks" href="https://twitter.com/JCSmiley4">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
              </a>
            </Col>
            <Col xs={4}>
              <a className="introSocialMediaLinks" href="https://github.com/jcsmileyjr">
                <FontAwesomeIcon
                  style={{ backgroundColor: "black" }}
                  icon={["fab", "github"]}
                  size="lg"
                />
              </a>
            </Col>
          </Row>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          <h2 className="whiteSpaceAboveFeatureArea center" style={{ color: "rgb(32, 179, 199)" }}>
            Featured Project
          </h2>
          <h5 className="center whiteSpaceBelowText">
            Android Mobile Photo App for Edge Motors Car Museum
          </h5>
          <Card>
            <Card.Img
              variant="top"
              fluid="true"
              src={require("../img/car-boy.jpg")}
            />
            <Card.Body>
              <Row>
                <Col className="center" xs={6} sm={3}>
                  <FontAwesomeIcon
                    style={{ color: "navy" }}
                    icon={["fab", "react"]}
                    size="lg"
                  />
                  <Card.Text>React Native</Card.Text>
                </Col>
                <Col className="center" xs={6} sm={3}>
                  <FontAwesomeIcon
                    style={{ color: "orange" }}
                    icon={["fab", "html5"]}
                    size="lg"
                  />
                  <Card.Text>HTML5</Card.Text>
                </Col>
                <Col className="center" xs={6} sm={3}>
                  <FontAwesomeIcon
                    style={{ color: "navy" }}
                    icon={["fab", "css3"]}
                    size="lg"
                  />
                  <Card.Text>CSS3</Card.Text>
                </Col>
                <Col className="center" xs={6} sm={3}>
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={["fab", "js"]}
                    size="lg"
                  />
                  <Card.Text>JavaScript</Card.Text>
                </Col>
              </Row>
              <Row className="whiteSpaceAboveFeatureArea">
                <Col>
                  <Card.Subtitle className="center">
                  Paid Freelance project completed in April of 2019
                  </Card.Subtitle>                
                </Col>
              </Row>
              <Row className="whiteSpaceAboveFeatureArea">
                <Col className="center">
                  <Button
                    onClick={()=>{props.showCaseStudy("Edge Motors Museum")}}
                    variant="primary"
                  >
                    Read Case Study
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <h5
            onClick={props.showPortfolioPage}
            style={{ color: "rgb(32, 179, 199)" }}
            className="center rowWhiteSpace"
          >
            Click here to view other projects
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
