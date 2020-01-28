import React from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import '../styles/SignInUpForm.scss'
import {Link} from 'react-router-dom'
export default () => (
    <Container className="sign-in-container">
        <Form className="sign-in">

            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name " />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name " />
            </Form.Group>
            

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
            <Form.Group controlId="formBasicPasswordRewrite">
                <Form.Label>Rewrite password</Form.Label>
                <Form.Control type="password" placeholder="Rewrite password" />
            </Form.Group>

            <Button variant="success" type="submit">
                Sing Up
            </Button>
            <Form.Text className="text-muted">
                Already a member?. <Link to="/signin">Sign in</Link>
            </Form.Text>
        </Form>
    </Container>
)