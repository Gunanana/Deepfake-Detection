import React from 'react';
import Navbar from '../components/Navbar';
import GoBack from '../components/GoBack';
import PredictionMeter from '../components/PredictionMeter';
import UploadedImage from '../components/UploadedImage';
import './Prediction.css';

function Prediction({ prediction, imageUrl }) {
  return (
    <div className="prediction-page">
      {/* Background image */}
      <div className="background-image"></div>

      <Navbar />
      <GoBack />

      <div className="content">
        <PredictionMeter probability={prediction} />
        <UploadedImage imageUrl={imageUrl} />
      </div>
    </div>
  );
}

export default Prediction;
