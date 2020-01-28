import React from 'react'
import { Container, Form, Button, Badge, Row, Col } from 'react-bootstrap';
import NavBar from "../components/welcomeNav";

const Contact = () => {
    return(
       <Container style={{
           paddingTop: "15rem"
       }}>
           <NavBar />
           <Container style={{
               maxWidth: "55rem",
               padding: "1rem",
               border: "1px #eee solid",
               boxShadow: "10px 10px 5px #eee"
           }} className="bg-light">
                <Form>
                    {/*input for name*/}
                    <Form.Group controlId="formBasicName">
                        <Form.Label srOnly>Your Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter your name" isValid/>
                        <Form.Text className="text-warning">
                            *required*
                        </Form.Text>
                    </Form.Group>

                    {/*input for email*/}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label srOnly>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-warning">
                            *required* <span className="text-muted">- We'll never share your email with anyone else.</span>
                        </Form.Text>
                    </Form.Group>
                    {/*input for Subject*/}
                    <Form.Group controlId="formBasicSubject">
                        <Form.Label srOnly>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject of your message" />
                        <Form.Text className="text-success">
                            *optional*
                        </Form.Text>
                    </Form.Group>
                    {/*input for message */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label srOnly>Your message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Write your message here..."/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Button variant="secondary" type="submit">Submit</Button>
                        </Col>
                        <Col xs lg="3">
                            <Badge variant="primary" className="align-bottom ml-1">Facebook</Badge>
                            <Badge variant="secondary" className="align-bottom ml-1">Twitter</Badge>
                            <Badge variant="success" className="align-bottom ml-1">Phone</Badge>
                        </Col>
                    </Row>
                </Form>
            </Container>
       </Container>
    )
}

export default Contact;