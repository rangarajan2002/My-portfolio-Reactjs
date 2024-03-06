import React, { useState, useEffect } from 'react';
import './project.css';
import coffepic from '../Assets/coffee  app pic.png';
import form from '../Assets/reacj ks hook form.png';
import signpic from '../Assets/sign language.png';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById('project');
      const sectionTop = projectSection.offsetTop;
      const screenHeight = window.innerHeight;

      setIsVisible(window.scrollY > sectionTop - screenHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='project' className={isVisible ? 'visible' : ''}>
      <div className='project-page'>
        <h1 className='Proj-title'>Projects</h1>
        <div className='project-container'>
          <ProjectContainer imageSrc={form} title="React js Hook Form" githubLink="https://github.com/rangarajan2002/React-js-Hook-forms" />
          <ProjectContainer imageSrc={coffepic} title="Coffee app UI design" githubLink="https://www.figma.com/file/7fYS9lc34UNRLBhbc2jILA/coffee?type=design&node-id=0-1&mode=design" />
          <ProjectContainer imageSrc={signpic} title="Sign Language caption generation using LSTM (Ongoing)" />
        </div>
      </div>
    </section>
  );
};

const ProjectContainer = ({ imageSrc, title, githubLink }) => {
  return (
    <div className='project-item'>
      <img src={imageSrc} alt={title} className='project-image' />
      <h2 className='project-title'>{title}</h2>
      {githubLink && <a href={githubLink} target='_blank' rel='noopener noreferrer' className='github-button'>GitHub</a>}
    </div>
  );
};

export default Project;
