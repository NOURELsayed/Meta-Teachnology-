import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaApple,
  FaAndroid,
  FaHome,
  FaPrint,
  FaPhone,
  FaRegEnvelope
} from "react-icons/fa";
import "../styles/Footer.scss";
import GameLogo from "../assets/Games/aboutPage.png";
const footer = () => {
  function shoot() {
    alert("Great !");
  }
  return (
    <Container className="footer " fluid>
      {/* <Row>
        <Col lg={3}>
          <h5>MetaStudio</h5>
        </Col>
        <Col lg={3} md={4} xl={3} className="mx-auto">
          <h6>Contact</h6>
          <hr style={{ width: "100px" }} />
          <p>
            <FaHome className="social" size="30" /> New York, NY 10012, US
          </p>
          <p>
            <FaRegEnvelope className="social" size="30"></FaRegEnvelope>{" "}
            info@example.com
          </p>
          <p>
            <FaPhone className="social" size="30"></FaPhone> + 01 234 567 88
          </p>
          <p>
            <FaPrint className="social" size="30"></FaPrint> + 01 234 567 89
          </p>
        </Col>

        <Col lg={3} md={4} xl={3} className="mx-auto">
          <h6>Contact</h6>
          <hr style={{ width: "100px" }} />
          <p> Home</p>
          <p>Games</p>
          <p> ContactUS</p>
          <p>About</p>
        </Col>

        <Row lassName="justify-content-right">
          <Col lg={12} md={4} xl={3}>
            <FaLinkedin className="social" size="30" onClick={shoot} />
            <FaFacebookSquare className="social" size="30" />
            <FaInstagram className="social" size="30" />
            <FaAndroid className="social" size="30" />
            <FaApple className="social" size="30" />
          </Col>

          <Col lg={12} md={12} xs={12}>
            © 2020 MetaTech. All Rights Reserved.
          </Col>
        </Row>
      </Row> */}

      <Row className="justify-content-right">
        <Col lg={3}>
          <h5>MetaStudio</h5>
        </Col>
        <Col lg={0}>
          {/* <img
            src={GameLogo}
            width="40"
            alt="siteLogo"
            class="d-inline-block align-middle mr-2"
          /> */}
        </Col>
      </Row>

      <Row className="justify-content-right">
        <Col lg={8}></Col>
        <Col>Home</Col>
        <Col>AboutUS</Col>
        <Col>Games</Col>
        <Col>ContactUS</Col>
      </Row>

      <Row>
        <Col lg={3} md={12} xs={12}>
          <FaLinkedin className="social" size="30" onClick={shoot} />
          <FaFacebookSquare className="social" size="30" />
          <FaInstagram className="social" size="30" />
          <FaAndroid className="social" size="30" />
          <FaApple className="social" size="30" />
        </Col>
        <Col lg={5} md={12} xs={12}>
          {""}
        </Col>
        <Col lg={4} md={12} xs={12}>
          © 2020 MetaTech. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  );
};
export default footer;
