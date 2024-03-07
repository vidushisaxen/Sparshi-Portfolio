import React from 'react'
import WorkExperience from './WorkExperience/WorkExperience'
import Certificates from './Certificates/Certificates';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Navbar from './Navbar';
import Footer from './Footer';
import Resume from './Resume';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
        <Hero/>
        <Resume/>
        <Skills/>
        
    </div>
    </>
  )
}

export default Home