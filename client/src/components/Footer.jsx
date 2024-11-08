// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; // Import the footer styles

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Deepfake Image Detector. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
