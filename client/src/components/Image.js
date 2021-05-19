import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Image.css';

const Image = ({ url, label, handleShowDelModal }) => {
  return (
    <div className="Image">
      <Button variant="outline-danger" onClick={handleShowDelModal}>
        delete
      </Button>
      <img src={url} alt={label} />
      <div className="Image-label">{label}</div>
    </div>
  );
};

export default Image;
