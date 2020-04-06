import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import "../styles/welcome.scss";

const ContactFormWelPage = ()  =>{

  return (
    <Container className="ContactForm">
      <Form >
        <Form.Group controlId="formBasicCheckbox">
          <Form.Control type="text" placeholder="Name" required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted"  >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="8" placeholder="Type something"/>
        </Form.Group>
        <Button variant="success" type="Send">
          Send
        </Button>
      </Form>
    </Container>
  );
}
export default ContactFormWelPage;