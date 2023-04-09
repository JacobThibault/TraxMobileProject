import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "../Food.module.css";
import AvailableEntrees from "./AvailableEntrees/AvailableEntrees";

const EntreesFormModal = (props) => {
  //module
  const [show, setShow] = useState(true);

  //close the module
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  return (
      //Creates Modal piece by piece for Entrees Section
      <Modal
      dialogClassName={classes.modalSize}
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
        {/*Modal Header that takes in props closeButton*/}
        <Modal.Header closeButton>
        <Modal.Title>Entree Selection</Modal.Title>
      </Modal.Header>

        {/*Modal Body for Entrees section*/}
        <Modal.Body>
          {/*Calls AvailableEntrees component to display Entrees information*/}
          <AvailableEntrees />
      </Modal.Body>

        {/*Modal Footer for Entrees section*/}
        <Modal.Footer>
          {/*Button that uses onClick event to close the modal*/}
          <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EntreesFormModal;
