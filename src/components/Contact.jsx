import React from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';


const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="contact-container-left">
        <img src='https://img.freepik.com/free-vector/flat-illustration-customer-support_23-2148878580.jpg'></img>
      </div>
      <div className="contact-container-right"></div>
      <div className="form">
      <form className='contact-form'>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="4" placeholder='Type your message'/>
            <button><a href="mailto:sparshisaxena12042000@gmail.com" target="_blank">Send Email</a></button>            
        </form>
      </div>

    </div>
    <Footer/>
    </>
    
  )
}

export default Contact