import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';

import Intro from './components/intro';
import Project from './components/project'
import About from './components/about';
import Nav from './components/Nav';

function HomePage(props){
  return(
    <div>
      <Nav />
      <Intro />
    </div>
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
