import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import email_icon from '../../assets/email_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import address_icon from '../../assets/address_icon.png'
import right_arrow from '../../assets/right_arrow.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Contact = () => {
  return (
    <div className='contact'>
        
        <div className='contact-left'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to rech out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our costumer.</p>
         
            <ul>
                <li><img src={email_icon} alt="" />bishnuhimal83@gmail.com</li>
                <li><img src={phone_icon} alt="" />+977-9767304950</li>
                <li><img src={address_icon} alt="" />Mahalaxmi-1,Imadol,Lalitpur,Nepal</li>
            </ul>
            <a href="https://www.instagram.com/choice_cnc/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={40} />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61552260535020" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={40} />
        </a>

        <a href="https://s.daraz.com.np/s.YDe" target="_blank" rel="noopener noreferrer">
          <TiShoppingCart size={40} />
        </a>
        </div>

        <div className='contact-right'>
              <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
                <label>Write Your Message Here</label>
                <textarea name="message" rows={6} placeholder='Enter Your Message' required></textarea>
                <button  type='submit' className='btn dark-btn'>Send Now <img src={right_arrow} alt="" /></button>
              </form>
              <span></span>
        </div>
      
    </div>
  )
}

export default Contact
