import React from "react";
import { Container } from "react-bootstrap";
import "../styles/welcome.scss";

const OurVision = () => {
  return (
     <Container  className="ourVision text-center">
          <h1>Our Vision</h1>
          <p style={{fontSize:"1rem"}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br /> sed diam
            nonumy eirmod tempor invidunt ut labore et dolore,
          </p>
     </Container>
  );
};

export default OurVision;
