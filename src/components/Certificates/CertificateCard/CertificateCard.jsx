import React from 'react'
import './CertificateCard.css';

const CertificateCard = (props) => {
  return (
    <>
    <div className="certificate-data-container">
      <img src={props.img}></img>
        <h3>{props.title}</h3>
        
            <p><b>Issued on: </b>{props.date}</p>
            <p><b>Issued by: </b>{props.issue}</p>
       
        <button>View</button>
    </div> 
    </>
  )
}

export default CertificateCard