import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import "../styles/welcome.scss";
const JoinUs = () => {
  return (
    <Container fluid >
      <Row className="JoinUs-welPage text-center">
      <Col >
          <h2>Join Now</h2>
          <p style={{fontSize:"1.5vw"}}>
          Keep your MetaStudios games safe and stay connected.
          </p>
          <Button variant="secondary">Join Now</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default JoinUs;
