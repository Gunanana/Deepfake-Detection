// src/App.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Heading from '../components/Heading';
import Upload from '../components/Upload';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Static background image */}
      <div className="background-image"></div>

      {/* Main content layer */}
      <div className="home-content">
        <Navbar />
        <Heading />
        <Upload />
        <Footer /> 
      </div>
    </div>
  );
}

export default Home;
