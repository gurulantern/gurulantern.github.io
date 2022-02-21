import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className='footer-section'>
        Thanks for stopping by!
        <FontAwesomeIcon className="icon" icon="fa-brands fa-linkedin-in" />
        <FontAwesomeIcon className="icon" icon="fa-brands fa-github" />
    </div>
  )
}

export default Footer