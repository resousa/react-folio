import { Container } from "../components/Grid";
import React from "react";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact"


function Contacts() {
  return (
    <Container fluid>
        <Jumbotron>
         <Contact />
        </Jumbotron>
    </Container>
  );
}

export default Contacts;






