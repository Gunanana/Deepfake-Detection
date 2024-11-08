// src/components/Upload.jsx
import React from 'react';
import { IoIosCloudUpload } from "react-icons/io";
import './Upload.css';

function Upload() {
  return (
    <div className="upload-section">
      <label htmlFor="file-upload" className="upload-box">
        <IoIosCloudUpload className="upload-icon" />
        <p className="upload-text">Drag and drop an image or <span>Browse</span> to upload</p>
        <input type="file" id="file-upload" className="upload-input" />
      </label>
    </div>
  );
}

export default Upload;
