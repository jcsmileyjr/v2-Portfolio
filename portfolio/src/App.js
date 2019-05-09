import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import './App.css';

import Intro from './components/intro';
import About from './components/about';
import Nav from './components/Nav';
import Portfolio from './components/portfolio';

function HomePage(props){
  return(
    <div>
      <Nav
          showPortfolioPage= {props.showPortfolioPage}
          showHomePage= {props.showHomePage} 
          showAboutPage= {props.showAboutPage}  />
      <Intro  />
    </div>
  );
}

function PortfolioPage(props){
  return(
    <div>
      <Nav
          showPortfolioPage= {props.showPortfolioPage}
          showHomePage= {props.showHomePage} 
          showAboutPage= {props.showAboutPage}  />
      <Portfolio  />
    </div>
  );
}

function AboutPage(props){
  return(
    <Container>
      <Row>
        <Nav 
            showPortfolioPage= {props.showPortfolioPage}
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

  showPortfolioPage = () => {
    this.setState(previousState => ({
      intro: false,
    }));
    
    this.setState(previousState => ({
      portfolio: true,
    }));  
    
    this.setState(previousState => ({
      about: false,
    }));       
  }

  render() {
    return (
      <div>
          {this.state.intro && <HomePage
              showPortfolioPage={this.showPortfolioPage} 
              showHomePage={this.showHomePage}
              showAboutPage={this.showAboutPage} />}
          {this.state.about && <AboutPage
              showPortfolioPage={this.showPortfolioPage}
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}
          {this.state.portfolio && <PortfolioPage
              showPortfolioPage={this.showPortfolioPage}
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}              
      </div>
      
    );
  }
}


export default App;
