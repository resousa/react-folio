import { Col, Container, Row } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectCarousel from "../components/ProjectCarousel"

function Portfolio() {
  return (
    <Container fluid>
          <ProjectCarousel />
    </Container>
  );
}

export default Portfolio;


