import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import './App.css';

import Intro from './components/intro';
import About from './components/about';
import Nav from './components/Nav';

function HomePage(props){
  return(
    <div>
      <Nav
          showHomePage= {props.showHomePage} 
          showAboutPage= {props.showAboutPage}  />
      <Intro  />
    </div>
  );
}

function AboutPage(props){
  return(
    <Container>
      <Row>
        <Nav 
            showHomePage= {props.showHomePage}
            showAboutPage= {props.showAboutPage} />
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
      portfolio:false,
      about:false,
    }
  }

  showAboutPage = () => {
    this.setState(previousState => ({
      intro: false,
    }));
    
    this.setState(previousState => ({
      portfolio: false,
    }));  
    
    this.setState(previousState => ({
      about: true,
    }));       
  }

  showHomePage = () => {
    this.setState(previousState => ({
      intro: true,
    }));
    
    this.setState(previousState => ({
      portfolio: false,
    }));  
    
    this.setState(previousState => ({
      about: false,
    }));       
  }

  render() {
    return (
      <div className="projectContainer">
          {this.state.intro && <HomePage 
              showHomePage={this.showHomePage}
              showAboutPage={this.showAboutPage} />}
          {this.state.about && <AboutPage
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}
      </div>
      
    );
  }
}


export default App;
