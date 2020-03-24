import React from "react";
import { Row} from "react-bootstrap";
import "../styles/Contact.scss";
const ContactPageCover = () => {
  return (
    <div className="ourOffice-cover" >
    <Row className=" justify-content-md-center" style={{padding:"100px"}}>
         <h1 >Fluid Cover</h1>
        {/* <p >
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p> */}
     </Row>
     </div>
  );
}
export default ContactPageCover;