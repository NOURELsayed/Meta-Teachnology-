import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Footer from "../components/Footer";
import img from "../assets/1.jpeg";
import '../styles/news.scss'
const News = () => {
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
    </Container>
  );
}
export default News;