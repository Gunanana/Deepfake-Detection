// src/components/PredictionMeter.jsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './PredictionMeter.css';

function PredictionMeter({ probability }) {
    return (
      <div className="prediction-meter" 
        style={{
            width: 300
        }}>

        <CircularProgressbar
            value={probability}
            text={`${probability}% AI`}
            styles={buildStyles({
                textSize: 10,
                textColor: '#333',
                pathColor: '#4caf50',
                trailColor: '#f3f3f3',
          })}
        />
      </div>
    );
  }

export default PredictionMeter;
