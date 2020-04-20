import { Container, Row } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import Me from "../assets/images/me.jpg";

function About() {
  return (
    <Container fluid>
      <Row>
        <Jumbotron>
          <h1>About Me</h1>
          <img
            src={Me}
            class="rounded mx-auto d-block"
            height="200"
            width="155"
            alt="Ryan"
          />
          have lived in the state of Washington for the past 8 years. Before
          that I grew up in Dayton, OH, and spent some time in Las Vegas while
          attending University of Nevada Las Vegas. I currently live in West
          Seattle with my wife Lindsay and my dog Toby. I really enjoy making
          models, watching/playing basketball, and hiking with my wife and dog.
          Since moving to Washington I have had jobs as a finish carpenter, CAD
          designer, and most recently facilities manager. Coding has always
          intrigued me. I had spent some time in the past playing around on
          codecademy and really enjoyed it. After I saw this class being offered
          I was really excited to give it a shot. I have really enjoyed the
          class so far, and cant wait to continue learning. I am really excited
          to see what the future may hold!
        </Jumbotron>
        <div className="container2 mx-auto" id="portfolio">
        <h1>Projects</h1>
    </div>
      </Row>
    </Container>
  );
}

export default About;
