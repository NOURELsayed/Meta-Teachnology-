import React, { useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SignInForm from "./SigninForm";
// import Modal from "./Modal";
// import SignupForm from "./SignupForm";
import GameLogo from "../assets/Games/aboutPage.png";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import "../styles/welcome.scss";

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

  const bgStyle = {
    backgroundColor: change ? "rgba(45, 30, 66, 1)": "rgba(8, 11, 33, 0.8)",
  }
 // #080b21 rgba(8, 11, 33, 1)
 //#514b85 rgba(81, 75, 133, 1)
 //#4d4d8e rgba(77, 77, 142, 1)
  return (
    <Navbar expand="md" variant="dark" fixed="top" collapseOnSelect style={{...bgStyle, transition: "background-color 2s ease-out"}}>
      <Container >
        <Navbar.Brand as={Link} to="/" style={{ color: "#fff" }}>
          <Image
            src={GameLogo}
            width="45"
            alt="siteLogo"
            className="d-inline-block align-middle mr-2"
          />
          Meta Technology
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/games" style={{ color: "#fff" }}>
              Games
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#fff" }}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#fff" }}>
              About
            </Nav.Link>
          </Nav>
          {/* <Form inline>
            <Modal buttonText={"SignIn"}>
              <SignInForm />
            </Modal>
            <Modal buttonText={"SignUp"} styling={{backgroundColor: "red"}} >
              <SignupForm />
            </Modal>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default WelcomeNav;
