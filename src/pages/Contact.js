import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from "../components/welcomeNav";
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer'
import OurOffice from '../components/Our-office';
import ContactPageCover from '../components/ContactPage-cover';
import OurTeamContactPage from '../components/OurTeam-contactPage';
const Contact = () => {
    return(
       <Container className="contactPage" fluid>
           <NavBar />
           <ContactPageCover/>
           <br/>
           <OurOffice/>
           <br/>
           <ContactForm/>
           <br/>
           <Footer/>
       </Container>
    )
}

export default Contact;