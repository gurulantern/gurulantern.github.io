import React from 'react';
import './Home.css';
import home from './img/home.png';
import goat from './img/goat.png';
import controller from './img/controller.png';
import plant from './img/plant.png';
import { init } from "ityped";
import { useEffect, useRef } from "react";


function Home() {
    
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ['Storyteller', 'Developer', 'Designer', 'Educator', 'Gamemaker']
        })
    },[]);

  return (
    <div className="home-section" id="Home">
        <div className="home-container">
            <div className='home_content'>
                <h1 className="welcome">
                    WELCOME TO MY HOMEPAGE
                </h1>
                <div className='home'>
                    <img src={home} className='home-img' alt="" />
                </div>
                <h2 className="intro">
                    Hello there! I'm Alex Ho,
                </h2>
                <h3 className="specialties">
                    <span className="specialty-text" ref={textRef}></span>
                </h3>                      
                <div className='goat'>
                    <img src={goat} className='goat-img' alt="" />
                </div>
                <div className='controller'>
                    <img src={controller} className='controller-img' alt="" />
                </div>
                <div className='plant'>
                    <img src={plant} className='plant-img' alt="" />
                </div>
                <h2 className="location">
                    based in the US.
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Home;