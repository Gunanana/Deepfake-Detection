import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoBack.css'; // Import the CSS

function GoBack() {
  const navigate = useNavigate();

  return (
    <button 
      className="goback-button" 
      onClick={() => navigate('/')}
    >
      <span className="arrow">&larr;</span> {/* Arrow */}
      <span className="goback-text">Go Back</span>
    </button>
  );
}

export default GoBack;
