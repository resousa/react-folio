import { Container, Row } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";


function Contact() {
  return (
    <Container fluid>
     
        <Jumbotron>
        <h1>Contact</h1>
        <div class="row d-flex justify-content-around" id="logo">
            <i class="fab fa-github-square fa-7x"></i>
            <i class="fab fa-linkedin fa-7x"></i>
            <i class="fas fa-envelope-square fa-7x"></i>
            <i class="fas fa-poll-h fa-7x"></i>
        </div>
        <div class="row d-flex justify-content-around" id="contact">
            <a class="nav-item nav-link" href="https://github.com/resousa">github</a>
            <a class="nav-item nav-link" href="https://www.linkedin.com/in/sousa-ryan/">linkedin</a>
            <a class="nav-item nav-link" href="mailto:sousa.ryan4@gmail.com">email</a>
            <a class="nav-item nav-link" href="https://github.com/resousa/resousa.github.io/blob/master/assets/images/Resume.pdf">resume</a>
        </div>
        </Jumbotron>
    
    </Container>
  );
}

export default Contact;






