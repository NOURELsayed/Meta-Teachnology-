import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {Link} from 'react-router-dom';
import "../styles/Footer.scss";
import GameLogo from "../assets/Games/aboutPage.png";
const footer = () => {
  return (
    <Container className="footer " fluid >
      <Row>
        <Col style={{  padding: "1rem", display: "inline-flex", alignItems: "flex-end"}}>
        <Image
            src={GameLogo}
            className="ml-3"
            alt="siteLogo"
            style={{maxWidth: "8rem", height: "auto"}}
          /> 
       
          <div className=" ml-2 ">
          <h4>Meta Technologies</h4>
          <FaLinkedin className="social" size="20" />
          <FaFacebookSquare className="social" size="20" />
          <FaInstagram className="social" size="20" />
          <FaAndroid className="social" size="20" />
          <FaApple className="social" size="20" />  
          </div>
        </Col>
        <Col>
          
        </Col> 
        <Col className="link-col col-md-6">
          <div >
            <Link to="#" className="text-info footer-link" >home</Link>
            <Link to="#" className="text-info footer-link" >about</Link>
            <Link to="#" className="text-info footer-link" >games</Link>
            <Link to="#" className="text-info footer-link" >contact</Link>
          </div>
          <div  className="copyRight text-secondary">
            <p style={{color: "#eee"}}> © 2020 MetaTech. All Rights Reserved.</p>
          </div>
        </Col> 
      </Row>
    </Container>
  );
};
export default footer;
