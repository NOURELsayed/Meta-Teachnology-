import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "../styles/welcome.scss";
import ContactFormWelPage from "./ContactForm-welPage";
import MapContainer from './MapComponent'
const ContactForm = () =>{
  return (
    <Container   fluid>
      <Row className="contactFormSection" >
        <Col  lg={6}>
          {/* <MapContainer/> */}
        </Col>
        <Col  lg={6}>
          <ContactFormWelPage />
        </Col>
      </Row>
    </Container>
  );
}
export default ContactForm;