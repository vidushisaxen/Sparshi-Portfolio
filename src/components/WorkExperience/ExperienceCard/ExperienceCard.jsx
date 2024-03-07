import React from 'react'
import './ExperienceCard.css';

const ExperienceCard = (props) => {
  return (
    <>
    <div className="work-experience-card">
        <h3>{props.title}</h3>

        <div className="work-duration">{props.date}
         <ul>
            {props.responsibilities.map((item)=>(
                    <li key={item}>{item}</li>
                 
            ))}
         </ul>

    </div>
    </div>
    </>

  )
}

export default ExperienceCard