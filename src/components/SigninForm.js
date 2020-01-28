 
import React from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import '../styles/SignInUpForm.scss'
import { Link } from 'react-router-dom';

export default () => (
    <Container className="sign-in-container">
        <Form className="sign-in">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            <Form.Text className="text-muted">
                Not a member?. <Link to="/signup">Sign Up</Link>
            </Form.Text>
        </Form>
    </Container>
)