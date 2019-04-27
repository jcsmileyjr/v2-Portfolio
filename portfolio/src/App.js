import React, { Component } from 'react';
import './App.css';

import Intro from './components/intro';
import Project from './components/project'

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
          {this.state.intro && <Project />}
      </div>
      
    );
  }
}


export default App;
