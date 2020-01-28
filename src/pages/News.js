import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// import FooterCopyright from "../components/FooterCopyright";
import Footer from "../components/Footer";
import img from "../assets/1.jpeg";
import '../styles/news.scss'
export default function News() {
  return (
    <Container>
      <Row  className='news-imgs'>
        <Col xs={12} md={4}>
          <Image src={img} rounded />
        </Col>
        <Col xs={12} md={4}>
          <Image src={img} rounded />
        </Col>
        <Col xs={12} md={4}>
          <Image src={img} rounded />
        </Col>
      </Row>
      <Footer />
      {/* <FooterCopyright /> */}
    </Container>
  );
}
