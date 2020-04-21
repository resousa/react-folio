import { Container, Row } from "../components/Grid";
import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

function Main() {
  return (
    <Container fluid>
      <Row>
        <About />
        <div id="about"></div>
        <Portfolio />
        <div id="portfolio"></div>
        <Contact />
        <div id="contact"></div>
        
      </Row>
    </Container>
    
  );
}

export default Main;
