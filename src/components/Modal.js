
import React, {useState} from 'react'
import { Button, Modal} from "react-bootstrap"


const ModalComponent = (props) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <div>
      <Button /*variant="outline-success"*/ style={{...props.styling}} onClick={handleShow} className="nav-button mr-sm-2 "  >
        {props.buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {props.children}
      </Modal>

  <style jsx>{`
    .nav-button:focus,
    .nav-button:select {
      outline: 0;
    }
`}</style>
    </div>
)}
export default ModalComponent;