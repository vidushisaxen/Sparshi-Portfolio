import React from 'react'
import './Certificates.css';
import CertificateCard from './CertificateCard/CertificateCard';
import CertificateData from '../Certificatedata';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Certificates = () => { 
  return (
   <>
   <Navbar/>
   <section className='certificate-container'>
    <h2> Certificates</h2>
    <div className="certificate-content">
        {CertificateData.map((val,ind)=>{
            return(
                <CertificateCard
                key={ind}
                img ={val.img}
                title={val.title}
                date={val.date}
                issue={val.issue}
                />
            )
        })}
    </div>
   </section>
   <Footer/>
   </>
  )
}

export default Certificates