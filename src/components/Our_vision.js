import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import "../styles/welcome.scss";

const OurVision = () => {
  return (
     <Container fluid >
      <Row className="ourVision text-center">
        <Col>
          <h1>Our Vision</h1>
          <p style={{fontSize:"1vw"}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
          <Button variant="secondary">Secondary</Button>
        </Col>
      </Row>
     </Container>
  );
};

export default OurVision;
