import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "../Food.module.css";
import AvailableCombos from "./AvailableCombos/AvailableCombos";

const CombosFormModal = (props) => {
  //module
  const [show, setShow] = useState(true);

  //close the module
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  return (
    //Creates Modal piece by piece for Combos Section
    <Modal
      dialogClassName={classes.modalSize}
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
      {/*Modal Header that takes in props closeButton*/}
      <Modal.Header closeButton>
        {/*Modal Title for Combo section*/}
        <Modal.Title>Combo Selection</Modal.Title>
      </Modal.Header>

      {/*Modal Body for Combos section*/}
      <Modal.Body>
        {/*Calls AvailableCombos component to display Combos information*/}
        <AvailableCombos />
      </Modal.Body>

      {/*Modal Footer for Combos section*/}
      <Modal.Footer>
        {/*Button that uses onClick event to close the modal*/}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CombosFormModal;
