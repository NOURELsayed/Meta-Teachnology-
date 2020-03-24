import React from "react";
import "../styles/WelHeader.css";
import OurVision from "./Our_vision";
import Footer from "./Footer";
import GamesCards  from './GamesCards'
import JoinUs from './JoinUs'
import ContactForm  from './ContactForm'
import NavBar from './welcomeNav'
const Welcomecover = () => {
  const castParallax = () => {
    window.addEventListener("scroll", function(event) {
      let top = this.pageYOffset;

      let layers = document.getElementsByClassName("parallax");
      let layer, speed;
      for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        let yPos = -((top * speed) / 100);
        layer.setAttribute(
          "style",
          "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
      }
    });
  };
  document.body.onload = castParallax();

  return (
    <div>
      <div className="keyart" id="nonparallax"></div>
      <div className="keyart" id="parallax">
        <div
          className="keyart_layer parallax"
          id="keyart-0"
          data-speed="2"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-1"
          data-speed="5"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-2"
          data-speed="11"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-3"
          data-speed="16"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-4"
          data-speed="26"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-5"
          data-speed="35"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-6"
          data-speed="49"
        ></div>
        <div className="keyart_layer" id="keyart-scrim"></div>
        <div
          className="keyart_layer parallax"
          id="keyart-7"
          data-speed="63"
        ></div>
        <div className="keyart_layer" id="keyart-8" data-speed="100"></div>
      </div>
      <div id="maincontain">
        <div id="main">
          <div >
            <NavBar/>
            <OurVision />
            <br />
            <GamesCards />
            <br />
            <JoinUs />
            <br />
            <ContactForm />
            <br/>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcomecover;