import React from 'react';

function UploadedImage({ imageUrl }) {
  return (
    <div className="uploaded-image">
      <img src={imageUrl} alt="Uploaded" style={{ width: '10%', borderRadius: '8px', marginTop: '30px' }} />
    </div>
  );
}

export default UploadedImage;
