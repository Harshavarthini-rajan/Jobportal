import React from 'react'
import './ContactUs.css'
import { Header } from '../Components-LandingPage/Header'
import { Footer } from '../Components-LandingPage/Footer'
import ContactImage from '../assets/ContactUs.png'

export const ContactUs = () => {
  return (
    <div className="contact-page">
      <Header />

      <div className="contact-container">
        {/* LEFT IMAGE */}
        <div className="contact-left">
          <img src={ContactImage} alt="Contact Us" />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">Send us messages</p>
          <p className="contact-desc">
            Do you have a question? or need any help
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email ID" />
            </div>

            <div className="form-group">
              <label>Contact number</label>
              <input type="text" placeholder="Enter your number" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Type something..." />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}


