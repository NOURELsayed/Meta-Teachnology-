import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import '../styles/Contact.scss'
const OurOffice = () => {
    return (
        <Container fluid>
            <Row className="ourOffice " >
            < Col lg={6} md={6} xs={12} >
                <h2>Our OFFICE</h2>
                <p>
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy. - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </p>
            </Col> 
            < Col lg={6} md={6} xs={12}>
            </Col>
            </Row>
        </Container>
    )
}
export default OurOffice;