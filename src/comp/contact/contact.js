import React, { useState, useEffect } from 'react';
import './contact.css';
import emailpic from '../Assets/mail.jpg';
import phonepic from '../Assets/phone.jpg';
import linkpic from '../Assets/link.png';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const contactSectionTop = contactSection.offsetTop;
      const screenHeight = window.innerHeight;

      setIsVisible(window.scrollY > contactSectionTop - screenHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='contact' className={`slide-in ${isVisible ? 'visible' : ''}`}>
      <h1 className="Contact-title">Contact Me</h1>
      <div className='contact-info-upper-container'>
        <div className='contact-info-container'>
          <img src={emailpic} alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:g.rangarajan19@gmail.com" className='mailname'>g.rangarajan19@gmail.com</a></p>
        </div>
        <div className='contact-info-container'>
          <img src={linkpic} alt="LinkedIn icon" className="icon contact-icon link-icon" />
          <p><a href="https://rb.gy/xuv851" className='linkname'>LinkedIn</a></p>
        </div>
        <div className='contact-info-container'>
          <img src={phonepic} alt="phoneicon icon" className="icon contact-icon" />
          <p className='phone-no'>+91-6382636622</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
