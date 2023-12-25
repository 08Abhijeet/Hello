// Navbar.jsx

import { useState } from 'react';
import './Navbar.css';
import { SiReactos } from 'react-icons/si';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
  
      <div className="nav">
        <div className="inner">
          <SiReactos style={{ fontSize: 50, color:"white",  marginLeft: 20 }} />
          <p className='haha'> Portfolio</p>
        </div>
        <div className={`middle ${menuOpen ? 'open' : ''}`}>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`hello ${menuOpen ? 'open' : ''}`}>
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href='#' onClick={closeMenu}>Projects</a></li>
            <li><a href="#" onClick={closeMenu}>Users</a></li>
            <li><a href="#" onClick={closeMenu}>About</a></li>
          </ul>
        </div>
        <div className="outer">
          <a style={{ textDecoration: 'none' }} href='https://github.com/08Abhijeet'>
            <button className='noobs' onClick={closeMenu}> Github Profile</button>
          </a>
        </div>
      </div>

  );
};

export default Navbar;
