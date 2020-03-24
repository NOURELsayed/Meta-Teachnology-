import React from "react";
import { Container } from "react-bootstrap";

import WelcomeNav from "../components/welcomeNav";
import Footer from "../components/Footer";
import '../styles/Games.scss'
import ContactPageCover from "../components/ContactPage-cover";
import CarabiaGame from "../components/CarabiaGame"
import CreptoRiviaGame from '../components/CreptoRiviaCard'
const Games = () =>{
  return (
    <Container className="gamePage" fluid>
      <WelcomeNav />
      <ContactPageCover/>
      <br/>
      <CarabiaGame/>
      <br/>
      <CreptoRiviaGame/> 
     <br/>
      <br/>
      <Footer />
    </Container>
  );
}
export default Games;