import React from "react";
import { Jumbotron ,Container } from "react-bootstrap";
import "../styles/Contact.scss";
const ContactPageCover = () => {
  return (

      <Jumbotron fluid  style={{margin: "5rem auto 1rem auto"}}>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

  );
};
export default ContactPageCover;

