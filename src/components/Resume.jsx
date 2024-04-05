import React from 'react'
import './Resume.css'
import resume from './images/resume.jpg';

const Resume = () => {
  return (
  <>
  <div className="resume-container">
  <h2>Professional Profile</h2>
  <div className="resume-content">
    <img src={resume}>
    </img>
    
    <a href='https://drive.google.com/file/d/1GeLJbZpARHhxizvxzaBCFf_nRqheW9sB/view?usp=drive_link'><button>View Resume</button></a>
  </div>
  </div>
  
  </>
  )
}

export default Resume