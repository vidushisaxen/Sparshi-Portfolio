import React from 'react'
import './CertificateCard.css';

const CertificateCard = (props) => {
  return (
    <>
    <div className="certificate-data-container">
        <h3>{props.title}</h3>
        <div className="issue-date">
            {props.date}
            {props.issue}
        </div>
    </div>
    </>
  )
}

export default CertificateCard