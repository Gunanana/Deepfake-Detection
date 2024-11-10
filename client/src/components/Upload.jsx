import React, { useState } from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import UploadButton from './UploadButton';
import './Upload.css';

function Upload() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);

  return (
    <div className="upload-container">

      <div className="upload-section">
        <label 
          htmlFor="file-upload" 
          className={`upload-box ${dragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <IoIosCloudUpload className="upload-icon" />
          <p className="upload-text">
            {file ? `Selected: ${file.name}` : 'Drag and drop an image'}
            <span className="upload-browse">or <span onClick={() => document.getElementById('file-upload').click()}>Browse</span> to upload</span>
          </p>
          <input type="file" id="file-upload" className="upload-input" onChange={handleFileChange} />
        </label>
      </div>
      
      {file && (
        <div className="upload-button-container">
          <UploadButton file={file} />
        </div>
      )}
    </div>
  );
}

export default Upload;
