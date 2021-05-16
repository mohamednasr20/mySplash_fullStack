import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add A New Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Label</Form.Label>
            <Form.Control type="text" placeholder="Suspendess elite massa" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="password"
              placeholder="https://unsplash.com/photos/Z8VEjf_-cPM"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
