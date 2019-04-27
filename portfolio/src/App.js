import React, { Component } from 'react';
import './App.css';

import Intro from './components/intro';

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
      <div>
          {this.state.intro && <Intro />}
      </div>
      
    );
  }
}


export default App;
