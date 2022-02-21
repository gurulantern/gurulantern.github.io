import React from 'react'
import "./Projects.css";
import birthday from "./img/Birthday.png";
import todo from "./img/To do.png"; 
import quotes from "./img/Quotes.png";
import hgred from "./img/hourglass_red.png";
import hggreen from "./img/hourglass_green.png";
import hgblue from "./img/hourglass_blue.png";

function ProjectTile(props) {
    return (
        <div className={props.class} id="tile">
            <h3 className='project-title'>{props.title}</h3>
            <img src={props.image} alt='' clasName='project-image' />
            <a href={props.Url}><button className='project-button'>View</button></a>
        </div>
    )
}

function Projects() {
  return (
    <div className='projects-section' id="Projects">
        <div className='heading'>
            <h1 className='project-head'>
                Projects
            </h1>
            <p className='project-head-meta'>
                Take a look at some of my projects
            </p>
        </div>
        <div className='project-container'>
            <ProjectTile 
                class="project4"
                title="Birthday Countdown App"
                image={birthday}
                Url="https://codepen.io/gurulantern/full/yLPKNzY"    
            />
            <ProjectTile 
                class="project5"
                title="To-Do List App"
                image={todo}
                Url="https://codepen.io/gurulantern/full/dyVrLGq"    
            />
            <ProjectTile 
                class="project6"
                title="Random Quote Machine"
                image={quotes}
                Url="https://codepen.io/gurulantern/full/eYGPdbm"    
            />
            <ProjectTile 
                class="project3"
                title="Coming Soon"
                image={hggreen}
                Url=""    
            />
            <ProjectTile 
                class="project1"
                title="Coming Soon"
                image={hgblue}
                Url=""    
            />
            <ProjectTile 
                class="project2"
                title="Coming Soon"
                image={hgred}
                Url=""    
            />
        </div>
    </div>
  )
}

export default Projects 