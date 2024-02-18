import React from 'react'
import './WorkExperience.css'
import WORK_EXPERIENCE_DATA from './data'
import ExperienceCard from './ExperienceCard/ExperienceCard'

const WorkExperience = () => {
  return (
    <>
    <section className='experience-container'>
        <h2>Work Experience</h2>

        <div className="experience-content">
            {WORK_EXPERIENCE_DATA.map((item)=>{
               <ExperienceCard key={item.title} details ={item}/>
                
            })}
            
           
        </div>
    </section>
    </>
  )
}

export default WorkExperience