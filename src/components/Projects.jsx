import React from 'react'
import './Projects.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ECG from './images/ECG.jpg';
import solar from './images/solar.jpg'
import RPI from './images/RPI.jpg';
import Dott from './images/Dott.jpg';
 
const Projects = () => {
  return (
    <>
    <Navbar/>
    <h2>Projects</h2>
    <div className="project-container">
     <div className="project">
      <h2 className='project-heading'>IOT based Heart Monitoring System</h2>
      <p className='project-date'>Apr 2022 - Aug 2022</p>
      <p className='project-association'>Associated with Institute of engineering and technology, Agra</p>
      <p className='project-details'>In this project, the ECG data, which is gathered from the human body will be sent directly to the Internet-of-Things Cloud storage, utilizing Wi-Fi convention and SD card for offline data storage.
A Graphical user interface and local LCD is enforced in order to provide simple access.</p>
     </div>
     <img src={ECG} className='project-img'></img>
    </div>
    <div className="project-container">
     <div className="project">
      <h2 className='project-heading'>Automatic Sun Tracking Solar Panel</h2>
      <p className='project-date'>Aug 2021 - Oct 2021</p>
      <p className='project-association'>Associated with Institute of engineering and technology, Agra</p>
      <p className='project-details'>Solar trackers are devices used to orient photovoltaic panels, reflectors, lenses or other optical devices toward the sun. Since the sun's position in the sky changes with the seasons and the time of day, trackers are used to align the collection system to maximize energy production.

A solar tracking system maximizes your solar system's electricity production by moving your panels to follow the sun throughout the day, which optimizes the angle at which your panels receive solar radiation.</p>
     </div>
     <img src={solar} className='project-img'></img>
    </div>
    <div className="project-container">
     <div className="project">
      <h2 className='project-heading'>IOT based RPI home security system using Pi camera and email alert.</h2>
      <p className='project-date'>Feb 2021 - Jun 2021</p>
      <p className='project-association'>Associated with Institute of engineering and technology, Agra</p>
      <p className='project-details'>Inn this iot based project, we have build an iot based rpi home security system using PIR sensors and Pi camera with email alert. 
It is fully automatic iot based device.</p>
     </div>
     <img src={RPI} className='project-img'></img>
    </div>
    <div className="project-container">
     <div className="project">
      <h2 className='project-heading'>Dott Matrix</h2>
      <p className='project-date'>Nov 2019 - Jan 2020</p>
      <p className='project-association'>Associated with Institute of engineering and technology, Agra</p>
      <p className='project-details'>A dot matrix is an electronic digital display device that displays information on machines, clocks and watches, public transport departure indicators and many other devices requiring a simple alphanumeric display device . 

In this project, IET Agra had displayed on the screen.</p>
     </div>
     <img src={Dott} className='project-img'></img>
    </div>
    <Footer/>
    </>
    
  )
}

export default Projects