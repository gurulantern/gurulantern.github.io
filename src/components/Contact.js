import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div id="Contact" className='contact-section'>
        <div className='contact-container'>
            <h1 className='contact-head'>
                Contact
            </h1>
            <p className='contact-meta'>
                If you want to chat or collaborate, drop me a 
                line here or email me directly!
            </p>
            <address>
                <a className="address" href="mailto: alex.tianzhi.ho@gmail.com">alex.tianzhi.ho@gmail.com</a>
            </address>
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
                    <div>
                    <button type="submit" className='contact-button'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact