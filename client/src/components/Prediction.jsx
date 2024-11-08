// src/components/Prediction.jsx
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Prediction() {
  const [prediction, setPrediction] = useState(null);  // Store prediction result
  const [loading, setLoading] = useState(true);  // Track loading state
  const history = useHistory();

  // Simulate fetching prediction result (this would be replaced with an actual API call)
  useEffect(() => {
    // Replace with actual call to backend after image upload
    setTimeout(() => {
      // Simulate a prediction response from the server (this would be dynamic)
      const simulatedResult = {
        result: 'Real',  // or 'Fake' depending on the deepfake detection
        confidence: 95  // Example confidence score
      };

      setPrediction(simulatedResult);
      setLoading(false);
    }, 2000);  // Simulating a 2-second delay for the prediction
  }, []);

  const handleGoBack = () => {
    history.push('/');  // Navigate back to the upload page
  };

  return (
    <div className="prediction-page">
      {loading ? (
        <div>
          <h2>Loading prediction...</h2>
          {/* Optionally add a spinner or progress indicator here */}
        </div>
      ) : (
        <div>
          <h2>Prediction Result</h2>
          <p>Prediction: {prediction.result}</p>
          <p>Confidence: {prediction.confidence}%</p>
          <button onClick={handleGoBack}>Go Back to Upload</button>
        </div>
      )}
    </div>
  );
}

export default Prediction;
