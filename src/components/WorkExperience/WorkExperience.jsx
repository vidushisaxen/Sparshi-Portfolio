import React from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import WORK_EXPERIENCE_DATA from './WorkExperiencedata';
import Navbar from '../Navbar';
import Footer from '../Footer';

const WorkExperience = () => {
  return (
    <>
    <Navbar/>
    <section className='experience-container'>
        <h2>Work Experience</h2>

        <div className="experience-content">
        {WORK_EXPERIENCE_DATA.map((val,ind)=>{
                return(
                    <ExperienceCard
                    key={ind}
                    title={val.title}
                    date = {val.date}
                    responsibilities = {val.responsibilities}
                    />
                )
            })}
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default WorkExperience