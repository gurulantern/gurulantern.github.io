import React from 'react';
import './Home.css';
import emblem from './img/Water emblem.png';
import house from './img/house.png';
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
    <div className="home">
        <div className="home_bg">
            <div className="header d__flex align__items__center pxy__30">
                <div className="logo">
                    <img src={emblem} className="emblem" alt="" />
                </div>
                <div className="navigation">
                    <ul className="navbar d__flex">
                        <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                        <a href="#About"><li className="nav__items mx__15">About</li></a>
                        <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
                        <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className='home_content'>
                    <h1 className="welcome">
                        WELCOME TO MY HOMEPAGE
                    </h1>
                    <img src={house} className='home' alt="" />
                    <h2 className="intro">
                        Hello there! I'm Alex Ho,
                    </h2>
                    <h3 className="specialties">
                        <span className="specialty-text" ref={textRef}></span>
                    </h3>                      
                    <img src={goat} className='goat' alt="" />
                    <img src={controller} className='controller' alt="" />
                    <img src={plant} className='plant' alt="" />
                    <h2 className="location">
                        based in the US.
                        ready to collaborate.
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;