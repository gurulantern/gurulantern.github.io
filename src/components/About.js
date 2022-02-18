import React from 'react'
import './About.css';
import photo from './img/DSCN7654.jpeg';

function About() {
  return (
    <div className='about-section' id="About">
        <div className='container'>
            <div className='column1'>
                <img src={photo} className="photo" alt="" />
            </div>
            <div className='column2'>
                <h1 className='about-head'>
                    About Me
                </h1>
                <div className='about__meta'>
                    <p className='about-text'>
                        I am a self-taught web developer with a background in 
                        learner-driven education, acting, and customer service.   
                    </p>
                    <p className='about-text'>
                        My interests include reading, playing video games, board games, hiking,
                        and learning new skills. 
                    </p>
                    <p className='about-text'>
                        Currently, I am learning about smart contracts as well
                        as discovering more about sustainable agriculture on smaller scales. 
                    </p>
                    <p className='about-text'>
                        You can download my resume to see more about my experience! 
                    </p>
                    <div className='about-button'>
                        <a href='/Alex_Resume2022.pdf' download><button type="button" className='about_btn' >Download Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About