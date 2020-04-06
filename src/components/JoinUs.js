import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/welcome.scss";
const JoinUs = () => {
  return (
    <Container  className="JoinUs-welPage text-center">
          <h2>Join Now</h2>
          <p style={{fontSize:"1rem"}}>
          Keep your MetaStudios games safe and stay connected.
          </p>
          <Button variant="secondary">Join Now</Button>
    </Container>
  );
}
export default JoinUs;
