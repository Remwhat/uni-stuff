import React from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Hem</Nav.Link>
        <Nav.Link href="#action2">Våra Hotell</Nav.Link>
        <Nav.Link href="#action2">Boka Hotell</Nav.Link>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </div>
    </Navbar>
  );
};
