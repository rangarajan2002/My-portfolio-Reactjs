import React from 'react'
import {Link} from 'react-scroll';
import '../Navbar/navbar.css'
const navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>Hi Welcome to my Portfolio</p>
            <p>This Portfolio build using React Js</p>
        </div>
        <div>
            <ul className='nav-menu'>
            <li><Link activeClass='active' to='landingpage' spy={true} smooth={true} offset={-220} duration={500}>Home</Link></li>
            <li><Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link activeClass='active' to='Exp' spy={true} smooth={true} offset={-30} duration={500}>Experience</Link></li>
            <li><Link activeClass='active' to='project' spy={true} smooth={true} offset={-60} duration={500}>Projects</Link></li>
            <li><Link activeClass='active' to='contact' spy={true} smooth={true} offset={-20} duration={500}>Contact</Link></li>
            </ul>
          
        </div>

    </div>
    
    

  )
}

export default navbar;
