import React from "react";
import app from "../assets/app.jpg";
import { Row, Container, Col, Image } from "react-bootstrap";
import { FaLinkedinIn,FaFacebookF,FaGithub,FaAndroid,FaAppStoreIos } from "react-icons/fa";
import "../styles/Footer.scss";
export default function footer() {
  function shoot() {
    alert("Great !");
  }
  return (
    <Container className="footer " fluid>
      <Row>
        <Col  style={{ padding: "1rem" }}>
          <Image className="apps" style={{ width: "6rem" }} src={app} rounded></Image>
          <Image className="apps" style={{ width: "6rem", marginLeft: "0.2rem" }} src={app} rounded></Image>
        </Col>
      </Row>
      <hr className="hr" />
      <Row style={{ paddingBottom:'.5rem' }}>
        <Col style={{ fontSize: "0.9rem" }}>
          © 2020 MetaTech. All Rights Reserved.
        </Col>
        <Col style={{ fontSize: "0.9rem" }}>
        <FaLinkedinIn  className="social" size="20" onClick={shoot}/>
          <FaFacebookF  className="social" size="20"/>
          <FaGithub className="social" size="20"/>
          <FaAndroid className="social" size="20"/>
          <FaAppStoreIos className="social" size="20"/> 
        </Col>
      </Row>
    </Container>
  );
}