import { Row, Container, Card, Col } from "react-bootstrap";
import { FaTwitterSquare } from "react-icons/fa";
import "../styles/About.scss";
import AvatarPhoto from "../assets/1.jpeg";

// export default function OurTeamContactPage() {
//   function shoot() {
//     alert("Great !");
//   };
//   const arrow = (<span aria-hidden="true" className="carousel-control-next-icon"  style={{backgroundColor:"red", color:"red",padding: "14%",
//   marginLeft: "154%"}}/>)
//   return (
//     <Container >
//       <Carousel
//         touch={true}
//         interval={null}
//         indicators={false}
//         keyboard={true}
//         slide={true}
//         nextIcon={arrow}
//         xs={3}
//       >

//         <Carousel.Item>
//           <Row>
//           <Col lg={3} md={3} xs={3} >
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Carousel.Item>
//         <Carousel.Item>
//           <Row>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Carousel.Item>

//         <Carousel.Item>
//           <Row>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col lg={3} md={3} xs={3}>
//               <Card
//                 style={{
//                   maxWidth: "20rem",
//                   height: "454px",
//                   opacity: 0.85,
//                   borderRadius: "25px"
//                 }}
//               >
//                 <Card.Body>
//                   <Container>
//                     {/* upper row */}
//                     <Row style={{ marginTop: "15%" }}>
//                       <Col lg={6} md={6} xs={6} style={{ marginTop: "25px" }}>
//                         <Card.Title>upper row</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">
//                           upper row
//                         </Card.Subtitle>
//                       </Col>
//                       <Col lg={6} md={6} xs={6}>
//                         <img
//                           className="d-block "
//                           src={AvatarPhoto}
//                           alt="First slide"
//                           style={{
//                             height: "100px",
//                             width: "100px",
//                             alignContent: "center",
//                             borderRadius: "50%"
//                           }}
//                         />
//                       </Col>
//                     </Row>
//                     {/* bottom row */}
//                     <Row style={{ marginLeft: "0", marginTop: "6%" }}>
//                       <p>
//                         <q id="b">
//                           bottom row: Some quick example text to build on the
//                           card title and make up the bulk of the card's content.
//                         </q>
//                       </p>
//                       <blockquote class="blockquote mb-0">
//                         <footer class="blockquote-footer">
//                           Someone famous in{" "}
//                           <cite title="Source Title">Source Title</cite>
//                         </footer>
//                       </blockquote>
//                       <Col className="d-flex justify-content-center">
//                         <FaTwitterSquare size="35" />
//                         {/* <FaFacebookF  size="20" />
//                         <FaGithub  size="20" /> */}
//                       </Col>
//                     </Row>
//                   </Container>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Carousel.Item>
//       </Carousel>
//     </Container>
//   );
// }

import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,


      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            maxWidth: "15rem",
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            maxWidth: "10rem",
            height:' 100px',
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            maxWidth: "13rem",
            height: '50px',
          }
        }
      ]
    };
    return (
        <Container style={{maxWidth:"70%", marginBottom:"5px"}} >
        <h2 className="text-center">Our team</h2>
        <Slider {...settings}>
        {/* <Col lg={2} xs={6} md={4}></Col> */}
                <Card
                  style={{
                    maxWidth: "15rem",
                    height: "400px",
                    opacity: 0.85,
                    borderRadius: "25px",
                   margin:"10px",
                  }}
                >
                  <Card.Body>
                    <Container>
                      {/* upper row */}
                      <Row style={{ marginTop: "15%" }}>
                        <Col lg={6} md={6} xs={6} >
                          <Card.Title>upper row1</Card.Title>
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
                      <Row style={{ marginLeft: "0", marginTop: "6%" }}>
                        <p>
                          <q id="b">
                            bottom row: Some quick example text to build on the
                            card title and make up the bulk of the card's
                            content.
                          </q>
                        </p>
                        <Col className="d-flex justify-content-center">
                          <FaTwitterSquare size="35" />
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
   
                {/* <Col lg={2} xs={6} md={4}></Col> */}
                <Card
                  style={{
                    maxWidth: "15rem",
                    height: "454px",
                    opacity: 0.85,
                    borderRadius: "25px"
                  }}
                >
                  <Card.Body>
                    <Container>
                      {/* upper row */}
                      <Row style={{ marginTop: "15%" }}>
                        <Col lg={6} md={6} xs={6}  >
                          <Card.Title>upper row2</Card.Title>
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
                      <Row style={{ marginLeft: "0", marginTop: "6%" }}>
                        <p>
                          <q id="b">
                            bottom row: Some quick example text to build on the
                            card title and make up the bulk of the card's
                            content.
                          </q>
                        </p>
                        <Col className="d-flex justify-content-center">
                          <FaTwitterSquare size="35" />
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
            

                {/* <Col lg={2} xs={6} md={4}></Col> */}
                <Card
                  style={{
                    maxWidth: "15rem",
                    height: "454px",
                    opacity: 0.85,
                    borderRadius: "25px"
                  }}
                >
                  <Card.Body>
                    <Container>
                      {/* upper row */}
                      <Row style={{ marginTop: "15%" }}>
                        <Col lg={6} md={6} xs={6}  >
                          <Card.Title>upper row3</Card.Title>
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
                      <Row style={{ marginLeft: "0", marginTop: "6%" }}>
                        <p>
                          <q id="b">
                            bottom row: Some quick example text to build on the
                            card title and make up the bulk of the card's
                            content.
                          </q>
                        </p>
                        <Col className="d-flex justify-content-center">
                          <FaTwitterSquare size="35" />
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>

      
                {/* <Col lg={2} xs={6} md={4}></Col> */}
                <Card
                  style={{
                    maxWidth: "15rem",
                    height: "454px",
                    opacity: 0.85,
                    borderRadius: "25px"
                  }}
                >
                  <Card.Body>
                    <Container>
                      {/* upper row */}
                      <Row style={{ marginTop: "15%" }}>
                        <Col lg={6} md={6} xs={6}  >
                          <Card.Title>upper row4</Card.Title>
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
                      <Row style={{ marginLeft: "0", marginTop: "6%" }}>
                        <p>
                          <q id="b">
                            bottom row: Some quick example text to build on the
                            card title and make up the bulk of the card's
                            content.
                          </q>
                        </p>
                        <Col className="d-flex justify-content-center">
                          <FaTwitterSquare size="35" />
                          {/* <FaFacebookF  size="20" />
                        <FaGithub  size="20" /> */}
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
    
                {/* <Col lg={2} xs={6} md={4}></Col> */}
                <Card
                  style={{
                    maxWidth: "15rem",
                    height: "454px",
                    opacity: 0.85,
                    borderRadius: "25px"
                  }}
                >
                  <Card.Body>
                    <Container>
                      {/* upper row */}
                      <Row style={{ marginTop: "15%" }}>
                        <Col lg={6} md={6} xs={6}  >
                          <Card.Title>upper row5</Card.Title>
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
                      <Row style={{ marginLeft: "0", marginTop: "6%" }}>
                        <p>
                          <q id="b">
                            bottom row: Some quick example text to build on the
                            card title and make up the bulk of the card's
                            content.
                          </q>
                        </p>
                        <Col className="d-flex justify-content-center">
                          <FaTwitterSquare size="35" />
                          {/* <FaFacebookF  size="20" />
                        <FaGithub  size="20" /> */}
                        </Col>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
      
        </Slider>
        </Container>
    );
  }
}
