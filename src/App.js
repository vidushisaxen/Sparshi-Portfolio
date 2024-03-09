import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Certificates from './components/Certificates/Certificates';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Circular from './components/Circular';

function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/work' element={<WorkExperience/>}/>
      <Route path='/certificates' element={<Certificates/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/circular' element={<Circular/>}/>

    </Routes>
    </>
  )
}

export default App;
