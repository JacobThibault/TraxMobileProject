import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";
import receipt from "./OrderReceipt.module.css";
import logo from "../../Layout/Brockp_Gold_Eagles_logo.png";

const OrderReceiptModule = (props) => {
  //modal
  const show = true;

  //close module
  const handleClose = () => {
    //refresh the page to finish
    props.refresh();
  };

  //warning toast for close button
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        //static so you have to click the close button on purpose
        backdrop="static"
        keyboard={false}
        dialogClassName={receipt.modalSize}
      >
        <Modal.Header>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*title */}
          <span className={receipt.title}>Thank you for dining with us!</span>

          {/*order ID */}
          <div className={receipt.receipt}>
            <span>Order ID: </span>
            <span>
              <mark>{props.receiptData.orderId}</mark>
            </span>
          </div>

          {/*email */}
          <div className={receipt.receipt}>
            <span>Email: </span>
            <span>{props.receiptData.email}</span>
          </div>

          {/*paid with */}
          <div className={receipt.receipt}>
            <span>Paymeny Method: </span>
            <span>{props.receiptData.paidWith}</span>
          </div>

          {/*total */}
          <div className={receipt.receipt}>
            <span>Total: </span>
            <span>{props.receiptData.total}</span>
          </div>

          {/*note */}
          <div className={receipt.note}>
            <span>**An itemized receipt has been sent to your email.</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/*close button */}
          <Button variant="secondary" onClick={toggleShowToast}>
            Close
          </Button>
        </Modal.Footer>

        {/*toast to actually close */}
        <ToastContainer position="middle-center">
          <Toast show={showToast} onClose={toggleShowToast}>
            {/*header */}
            <Toast.Header>
              <img src={logo} height="20px" width="auto" alt="logo"></img>
              <strong className="me-auto">&nbsp;Trax Mobile</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            {/*body */}
            <Toast.Body className="m-3 text-dark">
              Did you save your <strong>Order ID?</strong> It is required upon
              pickup
              <br />
              {/*finish button */}
              <Button variant="danger" className="mt-3" onClick={handleClose}>
                Yes, Finish
              </Button>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Modal>
    </div>
  );
};

export default OrderReceiptModule;