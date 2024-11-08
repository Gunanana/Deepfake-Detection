// src/components/Heading.jsx
import React from 'react';
import './Heading.css';
import logo_white from '../assets/logo_white.svg';
function Heading() {
  return (
    <div className="heading-section">
      <img 
        src={logo_white}
        alt="Logo" 
        className="heading-image" 
      />
      <h1 className="main-heading">Deepfake Image Detector</h1>
      <p className="slogan">Your Defence Against Digital Deception</p>
    </div>
  );
}

export default Heading;
