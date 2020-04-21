import { Container } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import ProjectCarousel from "../components/ProjectCarousel"

function Portfolio() {
  return (
    <Container fluid>
      <Jumbotron>
          <ProjectCarousel />
      </Jumbotron>
    </Container>
  );
}
export default Portfolio;


