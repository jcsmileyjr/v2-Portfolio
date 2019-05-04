import React from 'react';
import '../App.css';

export default function Project(props){
    return(
        <div>
            <section>
                <div><h3>Edge Motors Museum</h3></div>
                <div><h3>Freelance</h3></div>
            </section>
            <img class="projectPicture" src={require("../img/intro_meetup_small.jpg")} alt="Edge Moters Project" />
        </div>
    );
}