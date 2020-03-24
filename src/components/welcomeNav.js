import React, {useState} from "react";
import { Navbar, Nav, Container, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInForm from "./SigninForm";
import Modal from "./Modal";
import "../styles/welcome.scss";
import SignupForm from "./SignupForm";
import GameLogo from "../assets/Games/aboutPage.png"
import useWindowScrollPosition from "@rehooks/window-scroll-position";


const WelcomeNav = () => {
    const [change, setChange] = useState(false);
    const changePosition = 300;
  
    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "#343a40" : "transparent",
      textTransform: "uppercase",
      height:'60px',  
      transition: 'background-color 2s ease-out'
    };


  return (
    <Navbar expand="sm"  fixed="top" collapseOnSelect  style={style} className="pullDown navcontainer">
      <Container >
        <Navbar.Brand as={Link} to="/" style={{color:'#fff'}}>
        <img src={GameLogo } width="45" alt="siteLogo" class="d-inline-block align-middle mr-2"/>
          Meta Technology
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto " >
            <Nav.Link as={Link} to="/games"  style={{color:'#fff'}}>
              Games
            </Nav.Link>
            <Nav.Link as={Link} to="/contact"  style={{color:'#fff'}}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/about"  style={{color:'#fff'}}>About</Nav.Link>
          </Nav>
          <Form inline>
            <Modal buttonText={"SignIn"}>
              <SignInForm />
            </Modal>
            <Modal buttonText={"SignUp"}>
              <SignupForm />
            </Modal>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default WelcomeNav;