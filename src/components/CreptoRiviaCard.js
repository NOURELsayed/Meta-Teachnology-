import React from "react";
import {
  Row,
  Container,
  Card,
  Carousel,
  Image,
  Button,
  Col
} from "react-bootstrap";
import AvatarPhoto from "../assets/Games/toGad2.png";
import Modal from "./Modal";
import GameModal from "./GameModal";
import CreptoRiviaLogo from "../assets/Games/to_nour@2x.png"
const CreptoRiviaGame = () => {
  return (
    <Container>
      <Card className="gameCard">
        <Carousel
          indicators={false}
          prevIcon={false}
          nextIcon={false}
          interval="2500"
        >
          <Carousel.Item>
            <img
              className="d-block "
              src={AvatarPhoto}
              alt="First slide"
              style={{
                height: "200px",
                width: "100%",
                alignContent: "center",
                borderRadius: "25px 25px 0 0"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={AvatarPhoto}
              alt="Third slide"
              style={{
                height: "200px",
                width: "100%",
                alignContent: "center",
                borderRadius: "25px 25px 0 0"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={AvatarPhoto}
              alt="Third slide"
              style={{
                height: "200px",
                width: "100%",
                alignContent: "center",
                borderRadius: "25px 25px 0 0"
              }}
            />
          </Carousel.Item>
        </Carousel>
        <Image
          src={CreptoRiviaLogo}
          alt="AvatarPhoto"
          className="logoimage"
          roundedCircle
        />
        <Card.Body className="gamePage-cardBody">
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="outline-info" className="moreInfonbtn">More...</Button> */}
          <Modal buttonText={"More"}  className="moreInfonbtn">
            <GameModal />
          </Modal>
          <Row className="btns">
            <Col lg={9} md={12} xs={6}></Col>
            <Col lg={3} xs={6}>
              <Button variant="info">Play Store</Button>
              {""}
              <Button variant="info">Ios store</Button>
              {""}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CreptoRiviaGame;