import React from 'react';
import './PredictionMeter.css';

function PredictionMeter({ prediction }) {
  const strokeDashoffset = (1 - prediction / 100) * 440; // Calculate the offset based on the prediction
  let strokeColor = '#15B9A6'; // Default color (green)
  
  if (prediction > 70) strokeColor = '#FF3B30'; // Red if prediction > 70%
  else if (prediction > 30) strokeColor = '#FFD700'; // Yellow if prediction > 30%

  return (
    <div className="prediction-meter">
      <div className="semi-circle-container">
        <svg className="semi-circle">
          <circle 
            className="semi-circle-background"
            cx="50%" cy="50%" r="45%" 
            strokeWidth="8"
            stroke="#e0e0e0"
            fill="transparent"
          />
          <circle
            className="semi-circle-progress"
            cx="50%" cy="50%" r="45%"
            strokeWidth="8"
            stroke={strokeColor} // Dynamic color based on prediction
            fill="transparent"
            strokeDasharray="440" 
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1s ease-out' }} // Smooth animation
          />
        </svg>
      </div>
      <div className="risk-text">
        <span>{Math.round(prediction)}%</span>
      </div>
    </div>
  );
}

export default PredictionMeter;
