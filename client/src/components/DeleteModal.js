import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const DeleteModal = ({ showDelModal, handleCloseDelModal }) => {
  return (
    <Modal show={showDelModal} onHide={handleCloseDelModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Are You Sure ?</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="light" onClick={handleCloseDelModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleCloseDelModal}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
