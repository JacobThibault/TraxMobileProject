import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "../Food.module.css";
import AvailableDrinks from "./AvailableDrinks/AvailableDrinks";

const DrinksFormModal = (props) => {
  //module
  const [show, setShow] = useState(true);

  //close the module
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  return (
    <Modal
      dialogClassName={classes.modalSize}
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Drink Selection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AvailableDrinks />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DrinksFormModal;
