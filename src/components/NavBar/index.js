/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './style.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
  return (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#about">Ryan Sousa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        
    </Nav>
    <Nav>
    <Nav.Link href="#about"><a>About</a></Nav.Link>
    <Nav.Link href="#portfolio"><a>Portfolio</a></Nav.Link>
    <Nav.Link href="#contact"><a>Contact</a></Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
export default NavBar;
