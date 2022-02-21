import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div id="Contact" className='contact-section'>
        <div className='container'>
            <h1 className='contact-head'>
                Contact
            </h1>
            <div className='column3'>
                <form
                    action="https://usebasin.com/f/59875d8d43c1"
                    method="POST"
                    enctype="multipart/form-data"
                    id="form"
                    className='form'
                >
                    <input className="input" type="text" name="name" placeholder='Name'/>
                    <input className="input" type="email" name="email" placeholder='Email' required />
                    <textarea className="input-msg" name="message" placeholder='Message'></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <div className='column4'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </div>
        </div>
    </div>
  )
}

export default Contact