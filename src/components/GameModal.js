// import React, { useState, useEffect } from "react";
// import { Row, Container, Col } from "react-bootstrap";
// export default function GameModal() {
//   const StateSelector = () => {
//     const initialValue = [{ id: 0, value: " --- Select a State ---" }];

//     const allowedState = [
//       { id: 1, value: "hhhhhhhhhhhhhhh" },
//       { id: 2, value: "E:\projects\Meta-Teachnology-\src\assets\new" },
//       { id: 3, value: "E:\projects\Meta-Teachnology-\src\assets\game-1.jpg" }
//     ];

//     const [stateOptions, setStateValues] = useState(initialValue);
//     // initialValue.push(...allowedState);

//     console.log(initialValue.length);
//     // ****** BEGINNING OF CHANGE ******
//     useEffect(() => {
//       // Should not ever set state during rendering, so do this in useEffect instead.
//       setStateValues(allowedState);
//     }, []);
//     // ****** END OF CHANGE ******

//     return (
//       <Container>
//     <h1>hello thius is modal game component</h1>
//           {stateOptions.map((localState, index) => (
//             <option key={localState.id}>{localState.value}</option>
//           ))}

//       </Container>
//     );
//   };
// }

import React from "react";
import { Row, Carousel } from "react-bootstrap";
import AvatarPhoto from "../assets/1.jpeg";
import "../styles/About.scss";
const GameModal = () => {
  return (
    <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={AvatarPhoto}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={AvatarPhoto}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={AvatarPhoto}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <Row>
        <p style={{ padding: "20px" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Row>
    </div>
  );
}
export default  GameModal;