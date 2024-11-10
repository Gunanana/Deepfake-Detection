import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from "react-icons/fa6";
import './UploadButton.css';

function UploadButton({ file }) {
  const navigate = useNavigate();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (result.error) {
        alert(result.error);
      } else {
        navigate('/prediction', { state: { prediction: result.prediction, imageUrl: result.image_url } });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert('Failed to upload file. Please try again.');
    }
  };

  return (
    <button className="upload-button" onClick={handleUpload}>
      Upload Image
    </button>
  );
}

export default UploadButton;
