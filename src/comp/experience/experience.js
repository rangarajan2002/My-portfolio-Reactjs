import React, { useState, useEffect } from 'react';
import './experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('Exp');
      const sectionTop = experienceSection.offsetTop;
      const screenHeight = window.innerHeight;

      setIsVisible(window.scrollY > sectionTop - screenHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'C', 'SQL', 'Quick Learner', 'Team Player', 'Leadership Quality', 'Figma', 'Adobe Xd'];

  return (
    <section id='Exp' className={isVisible ? 'visible' : ''}>
      <h1 className='Exp-title'>Experience</h1>
      <div className='experience-page'>
        <h2>Skills</h2>
        <div className='skill-grid'>
          {skills.map((skill, index) => (
            <div key={index} className={`skill-container`}>
              <div className='front'>{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
