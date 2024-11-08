// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Upload from './components/Upload';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div>
      {/* Static background image */}
      <div className="background-image"></div>

      {/* Main content layer */}
      <div className="content">
        <Navbar />
        <Heading />
        <Upload />
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
