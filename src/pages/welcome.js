
import React from "react";
import { Container } from "react-bootstrap";

import WelcomeCover from '../components/welcomecover'
import WelcomeNav from "../components/welcomeNav"


const Welcome = () => {
  return (
    <Container className="welPage" fluid >
       <WelcomeNav /> 
      <WelcomeCover />  
    </Container >
  );
};

export default Welcome;