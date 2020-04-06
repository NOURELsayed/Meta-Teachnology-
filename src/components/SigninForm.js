

import React, { useContext, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "../styles/SignInUpForm.scss";
import { AuthContext } from "../context/AuthContext";

export default function Signin() {
  const { login } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    nameError: "",
    passwordError: ""
  });
  const handleChange = e => {
    e.preventDefault();
    if (e.target.type === "email") {
      setUserInfo({ ...userInfo, email: e.target.value });
    } else if (e.target.type === "password") {
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userInfo);
    login(userInfo.email, userInfo.password);
    console.log("userInfo", userInfo);
  };

  return (
    <Container className="sign-in-container">
      <Form className="sign-in" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{userInfo.nameError}</div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{userInfo.passwordErrorr}</div>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">Not a member?.</Form.Text>
      </Form>
    </Container>
  );
}
