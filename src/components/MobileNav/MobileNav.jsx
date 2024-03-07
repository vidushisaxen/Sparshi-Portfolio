import React from 'react';
import './MobileNav.css';
import { Link } from 'react-router-dom';

const MobileNav = ({isOpen , toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active":""}`}
    onClick={toggleMenu}>

        <div className='mobile-menu-container'>
            <img className='logo' src='../assets/logo.jpg' alt =""/>

            <ul>
              <Link to='/'>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                </Link>
                {/* <li>
                <a className='menu-item'>Skills</a>
                </li> */}
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
                <Link to ='/contact'>
                <li>
                <a className='menu-item'>Contact</a>
                </li>
                </Link>
            </ul>

            
        </div>
    </div>
    </>
    
  )
}

export default MobileNav
