import React, { useState } from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import './Upload.css';
import { useHistory } from 'react-router-dom';  // Import useHistory for redirection

function Upload() {
  const [isUploading, setIsUploading] = useState(false);  // State for managing upload state
  const history = useHistory();  // Hook for redirection

  const handleFileUpload = (e) => {
    setIsUploading(true);  // Start buffering animation
    setTimeout(() => {
      // After 3 seconds (buffering animation), redirect to the new endpoint
      history.push('/prediction');
    }, 3000);  // Adjust time as needed
  };

  return (
    <div className="upload-section">
      <label htmlFor="file-upload" className="upload-box">
        <IoIosCloudUpload className="upload-icon" />
        <p className="upload-text">
          {isUploading ? "Uploading..." : "Drag and drop an image or "}
          <span>Browse</span> to upload
        </p>
        <input 
          type="file" 
          id="file-upload" 
          className="upload-input" 
          onChange={handleFileUpload}  // Trigger file upload handler
        />
        {isUploading && <div className="buffering-animation">Buffering...</div>}
      </label>
    </div>
  );
}

export default Upload;
