import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const Footer = () => {
  return (
    <div className='footer'>
     <div className='footer-content'>
     <div className='footer-left'>
        <img src={logo} className='footer-logo'/>
        <p>Choice CNC & 3D Craft is known for woodworking, custom design and CNC work, Best in the town.</p>
      </div>
      
      <div className='footer-middle-2'>
        <h3>Contact Us</h3>
        <p>bishnuhimal83@gmail.com</p>
        <p>+977-9767304950</p>
        <p>Mahalaxmi-1,Imadol</p>
        <p>Lalitpur,Nepal</p>
        <a href="https://www.instagram.com/choice_cnc/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={30} />
        </a>

        <a href="https://www.facebook.com/profile.php?id=61552260535020" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={30} />
        </a>

        <a href="https://s.daraz.com.np/s.YDe" target="_blank" rel="noopener noreferrer">
          <TiShoppingCart size={30} />
        </a>
      </div>
      <div className='footer-middle'>
        <h3>Services</h3>
        <p>Woodwork</p>
        <p>Custom Design</p>
        <p>CNC Work</p>
        <p>Online Order</p>
        <p>Home Delivery</p>
      </div>
      <div className='footer-right'>
      <h3>Follow Us</h3>
      <div className='social-icons'>
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
      </div>
      </div>
      <div className='copyright'>
        <div className='line'>
        </div>
        <p>Choice CNC & 3D Craft © 2024- All Rights Reserved. Created by Mr.Yonzon</p>
      </div>
      
     </div>
  
    
  )
}

export default Footer
