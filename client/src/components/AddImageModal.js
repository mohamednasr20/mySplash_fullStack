import React, { useState, useContext } from 'react';
import imagesServices from '../services/images';
import { GlobalContext } from '../context/GlobalState';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddImageModal = ({ show, handleClose }) => {
  const { addImage } = useContext(GlobalContext);
  const [newLabel, setNewLabel] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleAddImage = async () => {
    const newImage = { label: newLabel, url: newUrl };
    const res = await imagesServices.createImage(newImage);
    addImage(res.data);
    handleClose();
    setNewUrl('');
    setNewLabel('');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add A New Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicLabel">
            <Form.Label>Label</Form.Label>
            <Form.Control
              value={newLabel}
              type="text"
              placeholder="Suspendess elite massa"
              onChange={(e) => setNewLabel(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              value={newUrl}
              placeholder="https://unsplash.com/photos/Z8VEjf_-cPM"
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleAddImage}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddImageModal;
