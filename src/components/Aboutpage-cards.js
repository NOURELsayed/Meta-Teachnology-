import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import { FaTwitterSquare } from "react-icons/fa";
import "../styles/About.scss";
import AvatarPhoto from "../assets/1.jpeg";
const AboutCards = () => {
  return (
    <Container>
      <h2 className="text-center">Our Leaders</h2>
      <Row>
        <Col lg={4} md={6} xs={12} className="justify-content-center d-flex">
          <div className="mainCard">
            <div className="frontCard"></div>
            <div className="backCard">
              <Col xs={6} md={4}></Col>
              <Card
                style={{
                  height: "550px",
                  maxWidth: "22rem",
                  opacity: 0.85,
                  borderRadius: "25px"
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <Card.Title>upper row</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        upper row
                      </Card.Subtitle>
                    </div>
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
                  </div>
                  <div>
                    <p>
                      <q id="b">
                        bottom row: Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </q>
                    </p>
                    <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6} xs={12} className="justify-content-center d-flex">
          <div className="mainCard">
            <div className="frontCard"></div>
            <div className="backCard">
              <Col xs={6} md={4}></Col>
              <Card
                style={{
                  height: "550px",
                  maxWidth: "22rem",
                  opacity: 0.85,
                  borderRadius: "25px"
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <Card.Title>upper row</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        upper row
                      </Card.Subtitle>
                    </div>
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
                  </div>
                  <div>
                    <p>
                      <q id="b">
                        bottom row: Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </q>
                    </p>
                    <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6} xs={12} className="justify-content-center d-flex">
          <div className="mainCard">
            <div className="frontCard"></div>
            <div className="backCard">
              <Col xs={6} md={4}></Col>
              <Card
                style={{
                  height: "550px",
                  maxWidth: "22rem",
                  opacity: 0.85,
                  borderRadius: "25px"
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <Card.Title>upper row</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        upper row
                      </Card.Subtitle>
                    </div>
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
                  </div>
                  <div>
                    <p>
                      <q id="b">
                        bottom row: Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </q>
                    </p>
                    <FaTwitterSquare size="35" style={{ marginLeft: "2rem" }} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutCards;
