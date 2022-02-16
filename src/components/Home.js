import React from 'react';
import './Home.css';
import logo from './img/logo.gif';


function Home() {
  return (
    <div className="home">
        <div className="home_bg">
            <div className="header d__flex align__items__center pxy__30">
                <div className="logo">
                    <img src={logo} className="gif" alt="" />
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
                    <div className="home_meta">
                        <h1 className="welcome">
                            WELCOME TO MY HOMEPAGE
                        </h1>
                        <h2 className="intro">
                            Hello, I'm Alex Ho
                        </h2>
                        <ul className="specialties">
                            <li>Storyteller</li>
                            <li>Developer</li>
                            <li>Educator</li>
                            <li>Gamemaker</li>
                        </ul>
                        <h2 className="location">
                            based in the US.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;