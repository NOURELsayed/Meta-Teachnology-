import React, { useState, useContext } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "../styles/SignInUpForm.scss";
import { Link } from "react-router-dom";
import {SignUpContext } from '../context/SignUpContext'
const Singup = (props) => {
  const {SignUpAuth,SignUpContextFunction} = useContext(SignUpContext)
  const [SignupElements, setSignupElements] = useState({
    fristName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    SignUpContextFunction(SignupElements)
    console.log(SignUpAuth)
    console.log(SignupElements);
  };
  return (
    <Container className="sign-in-container">
      <Form className="sign-in" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name "
            onChange={e => {
              e.preventDefault();
              setSignupElements({
                ...SignupElements,
                fristName: e.target.value
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name "
            onChange={e => {
              e.preventDefault();
              setSignupElements({
                ...SignupElements,
                lastName: e.target.value
              });
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => {
              e.preventDefault();
              setSignupElements({ ...SignupElements, email: e.target.value });
            }}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => {
              e.preventDefault();
              setSignupElements({
                ...SignupElements,
                password: e.target.value
              });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordRewrite">
          <Form.Label> confirmPassword</Form.Label>
          <Form.Control
            type="password"
            placeholder=" confirmPassword"
            onChange={e => {
              e.preventDefault();
              setSignupElements({
                ...SignupElements,
                confirmPassword: e.target.value
              });
            }}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Sing Up
        </Button>
        <Form.Text className="text-muted">
          Already a member?. <Link to="/signin">Sign in</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};
export default Singup;
