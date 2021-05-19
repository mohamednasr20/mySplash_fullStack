import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import AddImageModal from './AddImageModal';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { searchTerm, updateSearchTerm } = useContext(GlobalContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="container my-4" expand="lg">
      <Navbar.Brand>My Unspalsh</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="ml-5">
          <FormControl
            value={searchTerm}
            type="text"
            placeholder="Search By Name"
            className="mr-sm-2"
            onChange={(e) => updateSearchTerm(e.target.value)}
          />
        </Form>
        <Button variant="success" className="ml-auto" onClick={handleShow}>
          Add A Photo
        </Button>
      </Navbar.Collapse>

      <AddImageModal show={show} handleClose={handleClose} />
    </Navbar>
  );
};

export default Header;
