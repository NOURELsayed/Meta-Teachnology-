
import React from "react";
import { Container } from "react-bootstrap";

import WelcomeNav from "../components/welcomeNav";
import WelcomeCover from '../components/welcomecover'
// import FooterCopyright from '../components/FooterCopyright'
import Footer from '../components/Footer'


const Welcome = () => {
  return (
    <Container >
      <WelcomeNav />
      <WelcomeCover />
      <Footer />
    </Container >
  );
};

export default Welcome;