import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-340} duration={500}>About Us</Link></li>
        <li><Link to='Products' smooth={true} offset={-340} duration={500}>Our Products</Link></li>
        <li><Link to='contact' smooth={true} offset={-340} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <CiMenuBurger className='menu-icon' size={40} onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
