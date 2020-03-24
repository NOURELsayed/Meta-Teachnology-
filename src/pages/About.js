import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/welcomeNav";
import ContactPageCover from "../components/ContactPage-cover";
import '../styles/About.scss'
import AboutCards from "../components/Aboutpage-cards";
import OurVision from "../components/Our_vision"
import Footer from "../components/Footer"
import OurTeamContactPage from "../components/OurTeam-contactPage"
const About = () => {
  return (
    <Container className="aboutPage" fluid >
      <NavBar />
      <ContactPageCover/>
      <br/>
      <OurVision/>
      <br/>
      <AboutCards/>
      <br/>
      <OurTeamContactPage/>
      <Footer/>
    </Container>
  );
}
export default About;