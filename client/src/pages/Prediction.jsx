import React from 'react';
import Navbar from '../components/Navbar';
import GoBack from '../components/GoBack';
import PredictionMeter from '../components/PredictionMeter';
import UploadedImage from '../components/UploadedImage';
import './Prediction.css';
import logo_white from '../assets/logo_white.svg';
import tom_cruise from '../assets/tom_cruise.png';

function Prediction({ prediction, imageUrl }) {
  return (
    <div className="prediction-page">
      {/* Background image */}
      <div className="prediction-background-image"></div>

      <div className="prediction-content">
        <Navbar />
        <GoBack />
        
        {/* Image and Meter in separate rows */}
        <div className="image-meter">
          <UploadedImage imageUrl={tom_cruise} />
          <PredictionMeter probability={prediction} />
        </div>
      </div>
    </div>
  );
}

export default Prediction;
