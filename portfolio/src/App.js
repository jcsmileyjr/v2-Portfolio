import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';

import './App.css';

import projects from './caseStudies.js';

import Intro from './components/intro';
import About from './components/about';
import Nav from './components/Nav';
import Portfolio from './components/portfolio';
import Project from './components/project';
import Footer from './components/footer';

function CaseStudyPage(props){
  return(
    <div>
      <Nav
          showPortfolioPage= {props.showPortfolioPage}
          showHomePage= {props.showHomePage} 
          showAboutPage= {props.showAboutPage}  />
      <Project
          projectPhoto1 = {props.projectPhoto1}
          projectPhoto2 = {props.projectPhoto2}
          projectPhoto3 = {props.projectPhoto3}
          projectPhoto4 = {props.projectPhoto4}
          projectPhoto5 = {props.projectPhoto5}
          projectResults = {props.projectResults} 
          projectDevelopment = {props.projectDevelopment}
          projectTechStack = {props.projectTechStack} 
          projectMyRole = {props.projectMyRole}  
          projectObjectives = {props.projectObjectives} 
          projectTitle = {props.projectTitle}  />
      <Footer />      
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
      <Intro showPortfolioPage= {props.showPortfolioPage} showCaseStudy = {props.showCaseStudy}  />
      <Footer />  
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
      <Portfolio showCaseStudy = {props.showCaseStudy}  />
      <Footer />  
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
        <Footer />  
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
      caseStudy: false,
      currentCaseStudy:[],
      currentCaseStudyTitle:"",
      currentCaseStudyOjectives:[],
      currentCaseStudyMyRole:"",
      currentCaseStudyTechStack:[],
      currentCaseStudyDevelopment:[],
      currentCaseStudyResults:"",
      currentCaseStudyPhoto1:"",
      currentCaseStudyPhoto2:"",
      currentCaseStudyPhoto3:"",
      currentCaseStudyPhoto4:"", 
      currentCaseStudyPhoto5:"",            
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
    
    this.setState(previousState => ({
      currentCaseStudyPhoto1: currentProject[0].photo1,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyPhoto2: currentProject[0].photo2,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyPhoto3: currentProject[0].photo3,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyPhoto4: currentProject[0].photo4,
    }));
    
    this.setState(previousState => ({
      currentCaseStudyPhoto5: currentProject[0].photo5,
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
    
    this.setState(previousState => ({
      caseStudy: false,
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
    
    this.setState(previousState => ({
      caseStudy: false,
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
    
    this.setState(previousState => ({
      caseStudy: false,
    }));    
  }

  showCaseStudyPage = (title) => {

    this.updateCurrentCaseStudy(title);

    this.setState(previousState => ({
      intro: false,
    }));
    
    this.setState(previousState => ({
      portfolio: false,
    }));  
    
    this.setState(previousState => ({
      about: false,
    }));  
    
    this.setState(previousState => ({
      caseStudy: true,
    }));    
  }

  render() {
    return (
      <div className="appBackGroundColor">
          {this.state.intro && <HomePage
              showCaseStudy = {this.showCaseStudyPage}
              showPortfolioPage={this.showPortfolioPage} 
              showHomePage={this.showHomePage}
              showAboutPage={this.showAboutPage} />}
          {this.state.about && <AboutPage
              showPortfolioPage={this.showPortfolioPage}
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}
          {this.state.portfolio && <PortfolioPage
              showCaseStudy = {this.showCaseStudyPage}
              showPortfolioPage={this.showPortfolioPage}
              showHomePage={this.showHomePage} 
              showAboutPage={this.showAboutPage} />}              
          {this.state.caseStudy && <CaseStudyPage
              projectPhoto5 ={this.state.currentCaseStudyPhoto5}
              projectPhoto4 ={this.state.currentCaseStudyPhoto4}
              projectPhoto3 ={this.state.currentCaseStudyPhoto3}
              projectPhoto2 ={this.state.currentCaseStudyPhoto2}
              projectPhoto1 ={this.state.currentCaseStudyPhoto1}
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
