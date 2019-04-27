import React from 'react';
import '../App.css';

export default function Intro(props){
    return(
        <div className="introContainer introImage">
            <div className="overlay"></div>
            <section className="introTitle">          
                <h1>JC Smiley</h1>
                <h3>Software Developer & Tech Meetup Organizer</h3>        
                <button>Download Resume PDF</button>
                <h3>Featured Project</h3>
            </section>
        </div>        
    );
}