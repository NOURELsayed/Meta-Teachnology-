import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import WelcomeNav from "../components/welcomeNav";
// import FooterCopyright from "../components/FooterCopyright";
import Footer from "../components/Footer";
import img from "../assets/1.jpeg";
import '../styles/Games.scss'
export default function Games() {
  return (
    <Container>
      <WelcomeNav />

      <Col xs={12} md={12} className="game-page-title text-center">
         <h2>Games</h2>
            <p> Caual Blockchain games</p>
        </Col>

      <Row className="game-page-title text-center">
        <Col >
          <Image src={img} rounded />
        </Col>
        <Col  >
          <Image src={img} rounded />
        </Col>
      </Row>

      <Footer />
      {/* <FooterCopyright /> */}
    </Container>
  );
}
