import React, { Component } from 'react';
import './App.css';

import Intro from './components/intro'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      intro:false,
      project:false,
      about:false,
    }
  }
  render() {
    return (
      <div className="container">
        <Intro />        
      </div>
    );
  }
}


export default App;
