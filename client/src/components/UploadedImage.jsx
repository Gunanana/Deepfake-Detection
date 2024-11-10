import React from 'react';
import './UploadedImage.css'


function UploadedImage({ imageUrl }) {
  return (
    <div className="uploaded-image">
      <img src={imageUrl} alt="Uploaded"/>
    </div>
  );
}

export default UploadedImage;
