import React, { useState, useEffect } from 'react';
import './about.css';
import aboutpic from '../Assets/4655878.webp';

const Aboutpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='about'>
      <h1 className={`About-title ${isVisible ? 'fade-in' : ''}`}>
        About Me
      </h1>
      <div className={`about-flex ${isVisible ? 'fade-in' : ''}`}>
        <div className='about-details-container'>
          <div className='text-container'>
            <p>Seasoned and proactive professional with a robust background in conceiving and executing software
              solutions, specializing in object-oriented programming, web development, and database technologies.
              Demonstrates adept problem-solving capabilities and effective communication skills, coupled with an
              enthusiasm for acquiring and integrating emerging technologies.</p>
          </div>
        </div>
        <div className={`picabout ${isVisible ? 'fade-in' : ''}`}>
          <img className='aboutpic' src={aboutpic} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
