import React from "react";
import './style.css';
import Nav from "react-bootstrap/Nav";


function NavBar() {
  return (
    <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/"><a>About</a></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/portfolio"><a>Portfolio</a></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact"><a>Contact</a></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavBar;
