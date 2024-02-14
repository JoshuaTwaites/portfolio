import React, { useState } from "react";
import './Navbar.css';
import open from '../../assets/images/menuIcon.png'
import close from '../../assets/images/closeIcon.png'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <a className='title' href="/">
        Portfolio
      </a>
      <div className='menu'>
        <img className={'menuBtn'}
          src={
            menuOpen ? `${close}` : `${open}`
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${'menuItems'} ${menuOpen && 'menuOpen'}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};