
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './comp/Navbar/navbar'
import Landingpage from './comp/Landingpage/landingpage';
import About from './comp/About/about'
import Experience from './comp/experience/experience'
import Project from './comp/Project/project';
import Contact from './comp/contact/contact';
const App = () => {
  return(
   <Router>
      <div>
        <Navbar />
        <Routes path="/" exact component={Landingpage} />
        <Routes path="/About" component={About} />
        <Routes path="/Experience" component={Experience} />
        <Routes path="/Projects" component={Project} />
        <Routes path="/Contact" component={Contact} />
      </div>
      <Landingpage />
      <About />
      <Experience />
      <Project />
      <Contact />

    </Router>	
    
  );
}

export default App;
