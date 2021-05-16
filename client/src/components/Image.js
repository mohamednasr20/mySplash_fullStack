import React from 'react';
import '../styles/Image.css';

const Image = ({ url, label, handleShowDelModal }) => {
  return (
    <div className="Image">
      <button onClick={handleShowDelModal}>delete</button>
      <img src={url} alt={label} />
      <div className="Image-label">{label}</div>
    </div>
  );
};

export default Image;
