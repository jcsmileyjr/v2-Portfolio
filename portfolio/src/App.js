import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import './App.css';

import projects from './caseStudies.js';

import Intro from './components/intro';
import About from './components/about';
import Nav from './components/Nav';
import Portfolio from './components/portfolio';
import Project from './components/project';

function CaseStudyPage(props){
  return(
    <div>
      <Nav
          showPortfolioPage= {props.showPortfolioPage}
          showHomePage= {props.showHomePage} 
          showAboutPage= {props.showAboutPage}  />
      <Project
          projectResults = {props.projectResults} 
          projectDevelopment = {props.projectDevelopment}
          projectTechStack = {props.projectTechStack} 
          projectMyRole = {props.projectMyRole}  
          projectObjectives = {props.projectObjectives} 
          projectTitle = {props.projectTitle}  />      
    </div>
  );
}

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
      intro:false,
      portfolio:false,
      about:false,
      caseStudy: true,
      currentCaseStudy:[],
      currentCaseStudyTitle:"",
      currentCaseStudyOjectives:[],
      currentCaseStudyMyRole:"",
      currentCaseStudyTechStack:[],
      currentCaseStudyDevelopment:[],
      currentCaseStudyResults:"",
    }
  }

  componentDidMount(){
    const startCase = projects[0].pageTitle;
    
    this.updateCurrentCaseStudy(startCase);
  } 

  updateCurrentCaseStudy = (title) =>{
    const currentProject = projects.filter(project => project.pageTitle === title )

    this.setState(previousState => ({
      currentCaseStudyTitle: currentProject[0].pageTitle,
    }));   

    this.setState(previousState => ({
      currentCaseStudyOjectives: currentProject[0].objectives,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyMyRole: currentProject[0].myRole,
    }));   
    
    this.setState(previousState => ({
      currentCaseStudyTechStack: currentProject[0].techStack,
    })); 
    
    this.setState(previousState => ({
      currentCaseStudyDevelopment: currentProject[0].development,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyResults: currentProject[0].results,
    }));     
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
      <div className="appBackGroundColor">
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
          {this.state.caseStudy && <CaseStudyPage
              projectResults ={this.state.currentCaseStudyResults}
              projectDevelopment ={this.state.currentCaseStudyDevelopment}
              projectTechStack ={this.state.currentCaseStudyTechStack}
              projectMyRole ={this.state.currentCaseStudyMyRole}
              projectObjectives ={this.state.currentCaseStudyOjectives}
              projectTitle ={this.state.currentCaseStudyTitle}
              showPortfolioPage={this.showPortfolioPage}
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}              
      </div>
      
    );
  }
}


export default App;
