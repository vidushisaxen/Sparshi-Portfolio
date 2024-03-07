import React from 'react'
import './Footer.css'
import { FaCopyright, FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
            {/* <div className='location'>
                <FaHome size={20} style={{color:"white", marginRight:"1rem"}}/>
            <div>
            <p>Haridwar, Uttarakhand, India.</p>
            </div>
         </div> */}
         <div className='email'>
         <h4><FaMailBulk size={20} style={{color:"white", marginRight:"1rem"}}/><a href="mailto:sparshisaxena12042000@gmail.com" target="_blank"></a></h4>
         </div>
        

         <div className='social'>
         <a href='https://www.linkedin.com/in/sparshi-saxena-a101aa/'><FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         </div>
         </div>
        
    </div>
    </>
  )
}

export default Footer