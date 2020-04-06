import React from "react";
import { Container } from "react-bootstrap";
import WelcomeNav from "../components/welcomeNav";
import Footer from "../components/Footer";
import ContactPageCover from "../components/ContactPage-cover";
import GamePageCard from "../components/GamePageCard";
import SildeOneCarabia from "../assets/Games/carabiaImgcard2.jpg";
import SildeTwoCarabia from "../assets/Games/carabiaImgCard.jpg";
import SildeThreeCarabia from "../assets/Games/GameImg.png";
import SildeOneCryptoRivia from "../assets/Games/cryptoRivia1.jpg";
import SildeTwoCryptoRivia from "../assets/Games/CryptoRivaia2.jpg";
import SildeThreeCryptoRivia from "../assets/Games/cryptoRivia3.jpg";
import CaribiaLogo from "../assets/Games/caribiaLogo.png";
import CryptoRivia from "../assets/Games/CryptoRivia.png";
import "../styles/Games.scss";
const Games = () => {
  return (
    <Container className="gamePage" fluid>
      <WelcomeNav />
      <ContactPageCover />
      <div style={{margin: "4rem auto 1rem auto"}}>
        <GamePageCard
          images={[SildeOneCarabia, SildeTwoCarabia, SildeThreeCarabia]}
          logo={CaribiaLogo}
        />
      </div>
      <div style={{margin:"1rem auto 4rem auto"}}>
        <GamePageCard
          images={[
            SildeOneCryptoRivia,
            SildeTwoCryptoRivia,
            SildeTwoCryptoRivia
          ]}
          logo={CryptoRivia}
        />
      </div>
      <Footer />
    </Container>
  );
};
export default Games;
