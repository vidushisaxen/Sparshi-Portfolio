import React from 'react';
import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick =()=>{
        setClick(!click);
    }

  return (
    <>
    <nav className='nav-wrapper'>
        <div className="nav-content">
            <img className='logo' src='../assets/logo.jpg' alt=''/>


            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                <a className='menu-item'>Skills</a>
                </li>
                <li>
                <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                <a className='menu-item'>Projects</a>
                </li>
                <li>
                <a className='menu-item'>Certifications</a>
                </li>
                <li>
                <a className='menu-item'>Contact</a>
                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
        {click ? 
        (<FaTimes size={20} style={{color:"#fff"}}/>) 
        : (<FaBars size={20} style={{color:"#fff"}}/>)
        }
        
    </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar