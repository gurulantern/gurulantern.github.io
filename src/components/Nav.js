import React from 'react';
import './Nav.css';
import emblem from './img/Water emblem.png';

function Nav () {
    return(
        <div className="header d__flex align__items__center pxy__30">
            <div className="logo">
                <img src={emblem} className="emblem" alt="" />
            </div>
            <div className='navigation'>
                <ul className="navbar d__flex">
                    <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                    <a href="#About"><li className="nav__items mx__15">About</li></a>
                    <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
                    <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Nav;