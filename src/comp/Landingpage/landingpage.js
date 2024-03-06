import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './landing.css';
import myPhoto from '../Assets/man-saying-hello-6712237-5559572.webp'; 
import Rangarajan_resume from '../Assets/RANGARAJAN G resume.pdf'

const WordRotator = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2000); // Change the interval time as needed (in milliseconds)
    
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <h4 className='section-text-p2'>{words[index]}</h4>
  );
};

const landingpage = () => {
  const words = ['Front End Developer', 'UI/UX designer'];
  const downloadResume = () => {
    // Create an anchor element
    const anchor = document.createElement('a');
    // Set the href attribute to the path of the resume file
    anchor.href = Rangarajan_resume;
    // Set the download attribute to specify the file name
    anchor.download = 'rangarajan_resume.pdf';
    // Append the anchor to the document body
    document.body.appendChild(anchor);
    // Click the anchor to trigger the download
    anchor.click();
    // Remove the anchor from the document body
    document.body.removeChild(anchor);
  };
  return (
    <section id='landingpage'>
      <div className='section_pic-container'>
        <img src={myPhoto} alt='Rangrajan G profile pic' />
      </div>
      <div className='section-text'>
          <p className='section-text-p1'>Hello I'm</p>
          <h1 className="Land-title">Rangarajan G</h1>
          <WordRotator words={words} />
          <div className='btn-container'>
              <button className='bt-1 btn-color-2' onClick={downloadResume}>Download Resume</button>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-20} // Adjust the offset if needed to ensure correct scrolling position
                duration={500}><button className='btn-2 btn-color-1'>Contact Info</button>
              </Link>
              
              
          </div>
      </div>
    </section>
  );
};

export default landingpage;
