import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
       <div className="contact-col">
          <h3>SEND US A MESSAGE <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

          <ul>
            <li><img src={mail_icon} alt="" /> Contact@example.com</li>
            <li><img src={phone_icon} alt="" /> (+93) 788 332 311</li>
            <li><img src={location_icon} alt="" /> shahre-now kabul, Afghanistan</li>
          </ul>
       </div>

       <div className="contact-col">
        <form>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' />

              <label htmlFor="">Your Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' />

            <label htmlFor="">Enter Your Message</label>
            <textarea rows={6} name="message" placeholder='Your Message Here...'></textarea>

            <button type='submit' className='btn dark-btn'>
            Submit <img src={white_arrow} alt="" /></button>
        </form>
       </div>
    </div>
  )
}

export default Contact