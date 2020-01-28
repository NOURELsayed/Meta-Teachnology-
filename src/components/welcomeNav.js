import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInForm from "./SigninForm";
import Modal from "./Modal";
import "../styles/welcome.scss";
import SignupForm from "./SignupForm";
export default () => {
  return (
    <Navbar expand="sm" bg="dark" variant="dark" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Meta Technology
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto ">
            <Nav.Link as={Link} to="/games">
              Games
            </Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">Company</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
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
