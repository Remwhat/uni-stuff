import React from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="d-flex justify-content-between">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/hotelsview/all">
          Hem
        </Nav.Link>
        <Nav.Link as={Link} to="/hotelsview">
          Våra Hotell
        </Nav.Link>
        <Nav.Link as={Link} to="/hotelsview">
          Boka Hotell
        </Nav.Link>
      </Nav>
      <div>
        <h1>Horisonta</h1>
      </div>
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </div>
    </Navbar>
  );
};
