// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo_white from '../assets/logo_white.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo_white} alt="Logo" className="logo" />
        <span className="project-name">Deepfake Image Detector</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#about-deepfake">About Deepfake</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
