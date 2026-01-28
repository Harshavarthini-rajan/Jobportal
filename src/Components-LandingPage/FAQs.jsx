import React from "react";
import "./FAQs.css";
import { Header } from "../Components-LandingPage/Header";
import { Footer } from "./Footer";
import faqsImage from "../assets/faq.png";
import searchicon from "../assets/icon_search.png";

const faqs = [
  "Who can use your platform?",
  "How do I create an account?",
  "Who can use your platform?",
  "What if I forget my password?",
  "Can I update my profile?",
  "How do I search for jobs?",
  "How do I know if my application was received?",
  "Can I upload multiple versions of my resume?"
];

const FAQs = () => {
  return (
    <>
      <Header />

      <div className="faq-page">
        <div
          className="faq-hero"
          style={{ backgroundImage: `url(${faqsImage})` }}
        >
          <div className="faq-hero-content">
            <h1>Hello, how can we support you?</h1>
            <p>
              Welcome to our help center! Here, you'll find answers to frequently
              asked questions, helpful guides, and useful tips to assist you in
              getting the most out of our platform.
            </p>

            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a keyword search"
              />
              <button className="search-btn"><img src={searchicon} alt="Search" />
              </button>
            </div>
          </div>
        </div>

        <div className="faq-content">
          <div className="faq-left">
            <span className="support-label">Support</span>
            <h2>FAQS</h2>
            <p>
              Have any questions? We've got answers! Check out our Frequently
              Asked Questions (FAQs) to find out quick solutions to common
              queries.<br></br> Save time and get the information you need right here.
            </p>
          </div>

          <div className="faq-right">
            {faqs.map((item, index) => (
              <div key={index} className="faq-item">
                <span>{item}</span>
                <span className="arrow"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQs;
