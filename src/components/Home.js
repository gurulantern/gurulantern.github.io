import React from 'react';
import './Home.css';
import logo from './img/logo.gif';

function Home() {
  return (
    <div className="home">
        <div className="home_bg">
            <div className="header d__flex align__items__center pxy__30">
                <img src={logo} alt="" />
            </div>
            <div className="navigation">
                <ul className="navbar d__flex">
                    <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                    <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
                    <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home;