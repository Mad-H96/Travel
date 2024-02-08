import './contactFrm.css'

import React from 'react'

const ContactFrm = () => {
  return (
    <>
    <div className="form-container">
        <h1>Send Message to Us</h1>
        <form action="#">
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <textarea placeholder='Message' rows='4'/>
            <button>Send Message</button>
        </form>
    </div>

    
    </>
  )
}

export default ContactFrm