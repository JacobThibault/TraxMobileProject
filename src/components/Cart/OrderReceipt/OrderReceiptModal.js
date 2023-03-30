import {
  Button,
  Modal,
  OverlayTrigger,
  Popover,
  Col,
  Row,
} from "react-bootstrap";
import receipt from "./OrderReceipt.module.css";

const OrderReceiptModule = (props) => {
  //modal
  const show = true;

  //close module
  const handleClose = () => {
    //refresh the page to finish
    props.refresh();
  };

  //popover for close button
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className="pb-3">
        <Row>
          <Col md={4} className="mt-2">STOP...</Col>
          <Col md={{ span: 4, offset: 4 }}>
            {/*this actually closes the modal */}
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Col>
        </Row>
      </Popover.Header>

      {/*warning message */}
      <Popover.Body>
        Did you save your <strong>Order ID?</strong> It is required upon pickup
      </Popover.Body>
    </Popover>
  );

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
        <Modal.Header closeButton>
          <Modal.Title>Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*title */}
          <span className={receipt.title}>Thank you for dining with us!</span>

          {/*order ID */}
          <div className={receipt.receipt}>
            <span>Order ID: </span>
            <span>
              <mark>{props.orderId}</mark>
            </span>
          </div>

          {/*email */}
          <div className={receipt.receipt}>
            <span>Email: </span>
            <span>{props.email}</span>
          </div>

          {/*paid with */}
          <div className={receipt.receipt}>
            <span>Paymeny Method: </span>
            <span>{props.paidWith}</span>
          </div>

          {/*total */}
          <div className={receipt.receipt}>
            <span>Total: </span>
            <span>{props.total}</span>
          </div>

          {/*note */}
          <div className={receipt.note}>
            <span>**An itemized receipt has been sent to your email.</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/*close button */}
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Button variant="secondary">Close</Button>
          </OverlayTrigger>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderReceiptModule;
