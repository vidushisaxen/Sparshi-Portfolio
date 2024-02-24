import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <>
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Executive Engineer</h2>
            <p>Denso India Pvt. Ltd.</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='../assets/7QC.jpg'></img>
                </div>

                <img src='../assets/sparshiImage.jpg'/>
                </div>

                <div>
                <div className='tech-icon'>
                    <img src='../assets/data-management.jpg'></img>
                </div>
                <div className='tech-icon'>
                    <img src='../assets/pareto-chart.webp'></img>
                </div>
                <div className='tech-icon'>
                    <img src='../assets/presentation-skills.png'></img>
                </div>
                <div className='tech-icon'>
                    <img src='../assets/training.png'></img>
                </div>
            </div>
        </div>
    </section>
    </>

    
  )
}


export default Hero