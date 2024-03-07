import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const[openMenu,setOpenMenu]=useState(false);

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);

    }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    <nav className='nav-wrapper'>
        <div className="nav-content">
            <img className='logo' src='../assets/logo.jpg' alt=''/>


            <ul>
                <Link to='/'>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                </Link>
                <Link to='/skills'>
                <li>
                <a className='menu-item'>Skills</a>
                </li>
                </Link>
                <Link to='/work'>
                <li>
                <a className='menu-item'>Work Experience</a>
                </li>
                </Link>
                <Link to='/projects'>
                <li>
                <a className='menu-item'>Projects</a>
                </li>
                </Link>
                <Link to='/certificates'>
                <li>
                <a className='menu-item'>Certifications</a>
                </li>
                </Link>
                <Link to='/contact'>
                <li>
                <a className='menu-item'>Contact</a>
                </li>
                </Link>
            </ul>

          <button class='menu-btn' onClick={toggleMenu}>
            <span class={"material-symbols-outlined"} style = {{fontSize :"1.8rem"}}>
                {openMenu?"close":"menu"}
            </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar