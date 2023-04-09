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
      //Creates Modal piece by piece for Drinks Section
      <Modal
      dialogClassName={classes.modalSize}
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
        {/*Modal Header that takes in props closeButton*/}
        <Modal.Header closeButton>
          {/*Modal Title for Drink section*/}
          <Modal.Title>Drink Selection</Modal.Title>
      </Modal.Header>

        {/*Modal Body for Drinks section*/}
        <Modal.Body>
          {/*Calls AvailableDrinks component to display Combos information*/}
          <AvailableDrinks />
      </Modal.Body>
        {/*Modal Footer for Drinks section*/}
        <Modal.Footer>
          {/*Button that uses onClick event to close the modal*/}
          <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DrinksFormModal;
