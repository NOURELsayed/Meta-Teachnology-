import React from "react";
import {
  Container,
  Card,
  Carousel,
  Image,
  Button,
} from "react-bootstrap";
// import AvatarPhoto from "../assets/Games/GameImg.png";
import Modal from "./Modal";
import GameModal from "./GameModal";
// import GameLogo from "../assets/Games/to_nour_2@2x.png";

function GamePageCard(props) {
  const CarouselItems = props.images.map(image => {
    return (
      <Carousel.Item>
        <img className="d-block slider-img" src={image} alt="First slide"/>
      </Carousel.Item>
    );
  });
  return (
    <Container className="gameCard-container justify-content-md-center">
      {/* <Card className="gameCard">
        <Carousel
          indicators={false}
          prevIcon={false}
          nextIcon={false}
          interval="2500"
        >
          {CarouselItems}
          
        </Carousel>
        <Image
          src={GameLogo}
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
          <Button variant="outline-info" className="moreInfonbtn">More...</Button>
          <Modal
            buttonText={"More"}
            variant="outline-info"
            className="moreInfonbtn"
          >
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
      </Card> */}
      <Card className="gameCard">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Carousel
          indicators={false}
          prevIcon={false}
          nextIcon={false}
          controls={false}
          interval="2500"
        >
          {CarouselItems}
        </Carousel>

        <Card.ImgOverlay className="gamePage-overlay">
        <Image
          src={props.logo}
          alt="AvatarPhoto"
          className="logoimage"
          roundedCircle
        />
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Modal
            buttonText={"More..."}
            // variant="info"
            styling={{
                  height: "25px",
                  width: "75px",
                  borderRadius: "12px",
                  textAlign: "center",
                  padding: "0",
                  fontSize: "14px",
                  margin: "-10px 0 50px 0",
                  backgroundColor:" #17a2b8"
            }}>
            <GameModal />
          </Modal>
              <Button variant="info" className="play-btn">Play Store</Button>
              <Button variant="info" className="ios-btn">App store</Button>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}

export default GamePageCard;
