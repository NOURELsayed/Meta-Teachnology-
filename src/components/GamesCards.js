import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import "../styles/welcome.scss";
import { FaTwitterSquare,
} from "react-icons/fa";
import "../styles/About.scss";
import AvatarPhoto from "../assets/1.jpeg";
const GamesCards = () => {
  return (
    <Container>
    <Row  className="justify-content-center" style={{marginLeft: "15%"}}>
      <Col  md={6} xs={12}  >
        <div className="mainCard">
          <div className="frontCard"></div>
          <div className="backCard">
            <Col xs={6} md={4}></Col>
            <Card
              style={{
                // maxWidth: "20rem",
                // height: "454px",
                height: "640px",
                maxWidth: "22rem",
                opacity: 0.85,
                borderRadius: "25px"
              }}
            >
              <Card.Body>
                <Container>
                  {/* upper row */}
                  <Row style={{ marginTop: "15%" }}>
                    <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
                      <Card.Title>upper row</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        upper row
                      </Card.Subtitle>
                    </Col>
                    <Col lg={6} md={6} xs={6}>
                      <img
                        className="d-block "
                        src={AvatarPhoto}
                        alt="First slide"
                        style={{
                          height: "100px",
                          width: "100px",
                          alignContent: "center",
                          borderRadius: "50%"
                        }}
                      />
                    </Col>
                  </Row>
                  {/* bottom row */}
                  <Row  style={{ marginLeft: "0", marginTop: "6%" }}>
                    <p>
                      <q id="b">
                        bottom row: Some quick example text to build on the
                        card title and make up the bulk of the card's content.
                      </q>
                    </p>
                     <Col className="d-flex justify-content-center">
                     <FaTwitterSquare
                        size="35" />
          
                   </Col> 
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>
      
      <Col  md={6} xs={12}  >
        <div className="mainCard">
          <div className="frontCard"></div>
          <div className="backCard">
            <Col xs={6} md={4}></Col>
            <Card
              style={{
                height: "640px",
                maxWidth: "22rem",
                opacity: 0.85,
                borderRadius: "25px"
              }}
            >
              <Card.Body>
                <Container>
                  {/* upper row */}
                  <Row style={{ marginTop: "15%" }}>
                    <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
                      <Card.Title>upper row</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        upper row
                      </Card.Subtitle>
                    </Col>
                    <Col lg={6} md={6} xs={6}>
                      <img
                        className="d-block "
                        src={AvatarPhoto}
                        alt="First slide"
                        style={{
                          height: "100px",
                          width: "100px",
                          alignContent: "center",
                          borderRadius: "50%"
                        }}
                      />
                    </Col>
                  </Row>
                  {/* bottom row */}
                  <Row  style={{ marginLeft: "0", marginTop: "6%" }}>
                    <p>
                      <q id="b">
                        bottom row: Some quick example text to build on the
                        card title and make up the bulk of the card's content.
                      </q>
                    </p>
                     <Col className="d-flex justify-content-center">
                      <FaTwitterSquare
                        size="35" />
             
                   </Col> 
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>

    </Row>
  </Container>
  );
}
export default GamesCards;