import {Container, Card} from "react-bootstrap";
import { FaTwitterSquare } from "react-icons/fa";
import "../styles/About.scss";
import AvatarPhoto from "../assets/1.jpeg";
import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      // dots: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
          }
        }
      ]
    };
    return (
      <Container className="slider-container" >
        <h2 className="text-center mb-3">Our team</h2>
        <Slider {...settings} className="slider">
          <Card
            style={{
                width: "33rem",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:"20rem"
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
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
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

          <Card
            style={{
              width: "33rem"
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:"20rem"
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
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
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

          <Card
            style={{
              width: "33rem"
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:"20rem"
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
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
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

          <Card
            style={{
              width: "33rem",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:"20rem"
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
                  <Card.Title>Nour Elsayed</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Frontend dev
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
        </Slider>
      </Container>
    );
  }
}