import {
    Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import classes from "../../Styles/MenuFormModal.module.css";
import AvailableCombos from "../AvailableCombos/AvailableCombos";

const CombosFormModal = (props) => {
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
                <Modal.Title>Combo Selection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AvailableCombos />
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
};

export default CombosFormModal;
