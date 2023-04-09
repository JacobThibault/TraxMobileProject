import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "../Food.module.css";
import AvailableSides from "./AvailableSides/AvailableSides";

const SidesFormModal = (props) => {
  //module
  const [show, setShow] = useState(true);

  //close the module
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  return (
      //Creates Modal piece by piece for Sides Section
      <Modal
      dialogClassName={classes.modalSize}
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
        {/*Modal Header that takes in props closeButton*/}
      <Modal.Header closeButton>
        {/*Modal Title for Side section*/}
        <Modal.Title>Sides Selection</Modal.Title>
      </Modal.Header>

        {/*Modal Body for Sides section*/}
        <Modal.Body>
          {/*Calls AvailableSides component to display Sides information*/}
          <AvailableSides />
      </Modal.Body>
      <Modal.Footer>
        {/*Button that uses onClick event to close the modal*/}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SidesFormModal;
