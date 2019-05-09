import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import './App.css';


import Intro from './components/intro';
import About from './components/about';
import Nav from './components/Nav';
import Project from './components/project'

function HomePage(props){
  return(
    <div>
      <Nav />
      <Intro />
    </div>
  );
}

function AboutPage(props){
  return(
    <Container>
      <Row>
        <Nav />
        <About />
      </Row>
    </Container>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      intro:true,
      project:false,
      about:false,
    }
  }
  render() {
    return (
      <div className="projectContainer">
          {this.state.intro && <HomePage />}
      </div>
      
    );
  }
}


export default App;
