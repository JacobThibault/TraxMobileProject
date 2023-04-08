import {
  Button,
  Form,
  Row,
  Col,
  OverlayTrigger,
  Modal,
  Tooltip,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CheckoutFormCardInformation from "./CheckoutFormCardInformation";
import CheckoutFormBillingAddress from "./CheckoutFormBillingAddress";
import forms from "./CheckoutForm.module.css";
import OrderSummary from "./OrderSummary";
import emailjs from "@emailjs/browser";

const CheckoutForm = (props) => {
  //module
  const [show, setShow] = useState(true);

  //close the module
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  const cartContents = props.cart;

  //handle discount
  const discount = props.discount;
  const discountString = "-" + props.discount * 100 + "%";

  //form email
  const [email, setEmail] = useState("@brockport.edu");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //form bannerId
  const [bannerId, setBannerId] = useState("800");
  const [bannerIdLength, setBannerIdLength] = useState(3);
  const handleBannerChange = (event) => {
    setBannerIdLength(event.target.value.length);
    setBannerId(event.target.value);
  };

  //form pay with card
  const [paidWithCard, setPaidWithCard] = useState(false);
  const handlePaidWithCardChange = () => {
    setPaidWithCard(!paidWithCard);
  };

  //submission handler
  const handleSubmit = (event) => {
    //stop screen refresh
    event.preventDefault();

    //turn order method into string
    const printPaymentType = (p) => {
      return p ? "Card" : "Points";
    };

    //generate order id
    const orderId = Date.now().toString();

    //compile order data
    const orderData = {
      orderId: orderId,
      email: email,
      paidWith: printPaymentType(paidWithCard),
    };

    //close and send order data to Cart.js
    props.onPayment(orderData);
    //send order total
    props.total(total);

    //send the receipt email
    console.log("sending receipt");
    const serviceID = "service_qkrwufa";
    const templateID = "template_o44mm2g";
    const publicKeyID = "mpR7R4vrGfTYTmbMg";
    console.log(document.getElementById("Email").value);

    emailjs.send(
      "service_qkrwufa",
      "template_o44mm2g",
      {
        to_name: document.getElementById("First").value,
        message:
          "Order ID: \n" +
          orderData.orderId +
          "\n Order: \n " +
          cartContents +
          "\n Total:\n" +
          total,

        email: document.getElementById("Email").value,
      },
      publicKeyID
    );
  };

  //get order total
  const [total, setTotal] = useState();
  const handleTotal = (value) => {
    setTotal(value);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          {/*title */}
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        {console.log(cartContents)}
        <Modal.Body>
          <Form className={forms.form} onSubmit={handleSubmit}>
            <div>
              {/*name */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="First">
                  <Form.Label>Student Name*</Form.Label>
                  <Form.Control required autoFocus />
                  <Form.Text className="text-muted">First</Form.Text>
                </Form.Group>

                <Form.Group as={Col} className="mt-2" controlId="Last">
                  <Form.Label> </Form.Label>
                  <Form.Control required />
                  <Form.Text className="text-muted">Last</Form.Text>
                </Form.Group>
              </Row>

              {/*banner id */}
              <Form.Group className="mb-3" controlId="Banner ID">
                <Form.Label>Banner ID*</Form.Label>
                <Form.Control
                  pattern="800+[0-9]{6}"
                  value={bannerId}
                  onChange={handleBannerChange}
                  required
                />
                <Form.Text className="text-muted">
                  Must be <strong>9 </strong>digits.{" "}
                  <em>
                    Currently entered: <strong>{bannerIdLength}</strong> digits.
                  </em>
                </Form.Text>
              </Form.Group>

              {/*email */}
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>

              {/*payment method */}
              <Form.Group className="mb-3" id="Payment">
                <Form.Label>Payment</Form.Label>
                <Form.Group className="ml-3">
                  {/*show different text for different payment method */}
                  {paidWithCard ? (
                    <Form.Text className="text-muted">
                      *Pay with card.
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *Pay with points.
                    </Form.Text>
                  )}
                  <Form.Check
                    type="switch"
                    default={paidWithCard}
                    onChange={handlePaidWithCardChange}
                  />
                </Form.Group>
              </Form.Group>
            </div>

            {/*show if paying with card */}
            {paidWithCard && (
              <div>
                {/*form for card information */}
                <CheckoutFormCardInformation />

                {/*form for billing information */}
                <CheckoutFormBillingAddress />
              </div>
            )}

            {/*discount */}
            <Form.Group className="mb-3" controlId="CouponCode">
              <Form.Label>Discount</Form.Label>
              <Form.Control value={discountString} readOnly />
            </Form.Group>

            {/*order summary */}
            <OrderSummary
              discount={discount}
              discountString={discountString}
              total={handleTotal}
            />

            {/*terms and conditions */}
            <Form.Group className="mb-3" id="TermsAndConditions">
              <Stack direction="horizontal" gap={2}>
                <Form.Check type="checkbox" required />
                <Form.Label className="mt-1">
                  I accept the{" "}
                  <a href="https://basc1.org/">Terms and Conditions</a>
                </Form.Label>
              </Stack>
            </Form.Group>

            {/*submit form */}
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>This action is final.</Tooltip>}
            >
              <Button variant="success" type="submit" className="mb-4">
                Pay & Place Order
              </Button>
            </OverlayTrigger>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/*close button */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutForm;
