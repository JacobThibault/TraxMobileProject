import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import forms from "./CheckoutForm.module.css";
import { useState } from "react";

const CheckoutFormCardInformation = () => {
  //card number
  const [cardNumberLength, setCardNumberLength] = useState(0);
  const handleCardNumberChange = (event) => {
    setCardNumberLength(event.target.value.length);
  };

  return (
    <div>
      <span className={forms.title}>Card Information</span>

      {/*card number */}
      <Form.Group className="mb-3" controlId="CardNumber">
        <Form.Label>Card Number*</Form.Label>
        <Form.Control
          pattern="[0-9]{16}"
          required
          onChange={handleCardNumberChange}
        />
        <Form.Text className="text-muted">
          Must be <strong>16</strong> digits.{" "}
          <em>
            Currently entered: <strong>{cardNumberLength}</strong> digits.
          </em>
        </Form.Text>
      </Form.Group>

      {/*card holder name */}
      <Form.Group controlId="CardHolderName">
        <Form.Label>Name on card*</Form.Label>
        <Form.Control required />
      </Form.Group>

      {/*card expiration */}
      <Row className="mt-3">
        <Form.Group as={Col} controlId="CardExpiration">
          <Form.Label>Expiration (MM-YY)*</Form.Label>
          <Form.Control pattern="[0-9]{2}-[0-9]{2}" required />
        </Form.Group>

        {/*card security code */}
        <Form.Group as={Col} controlId="CardSecurityCode">
          <Form.Label>Security Code*</Form.Label>
          <Form.Control
            pattern="[0-9]{3}"
            required
          />
          <Form.Text className="text-muted">
            Must be <strong>3</strong> digits.
          </Form.Text>
        </Form.Group>
      </Row>
    </div>
  );
};

export default CheckoutFormCardInformation;
