import { Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import forms from "./CheckoutForm.module.css";
import { useState } from "react";

const CheckoutFormBillingAddress = () => {
  //default state for state code
  const [stateCode, setStateCode] = useState("NY");
  const handleStateCodeChange = (event) => {
    setStateCode(event.target.value);
  };

  //default state for country
  const [country, setCountry] = useState("United States");
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  //phoneNumberLength
  const [phoneNumberLength, setPhoneNumberLength] = useState(0);
  const handlePhoneNumberLength = (event) => {
    setPhoneNumberLength(event.target.value.length);
  };

  return (
    <div>
      {/*title */}
      <span className={forms.title}>Billing Address</span>

      <Row className="mb-3">
        {/*first name */}
        <Form.Group as={Col} controlId="First">
          <Form.Label>Name*</Form.Label>
          <Form.Control required />
          <Form.Text className="text-muted">First</Form.Text>
        </Form.Group>
        {/*last name */}
        <Form.Group as={Col} className="mt-2" controlId="Last">
          <Form.Label></Form.Label>
          <Form.Control required />
          <Form.Text className="text-muted">Last</Form.Text>
        </Form.Group>
      </Row>
      {/*address */}
      <Form.Group controlId="Address">
        <Form.Label>Address*</Form.Label>
        <Form.Control required />
        <Form.Text className="text-muted">Street Address</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Address2">
        <Form.Label></Form.Label>
        <Form.Control />
        <Form.Text className="text-muted">
          Apartment, suite, etc. (optional)
        </Form.Text>
      </Form.Group>
      {/*city */}
      <Row>
        <Form.Group as={Col} controlId="City">
          <Form.Label></Form.Label>
          <Form.Control pattern="[a-zA-Z]+" required />
          <Form.Text className="text-muted">City</Form.Text>
        </Form.Group>
        {/*state */}
        <Form.Group as={Col} controlId="State">
          <Form.Label></Form.Label>
          <Form.Control
            pattern="[A-Z]{2}"
            value={stateCode}
            onChange={handleStateCodeChange}
            required
          />
          <Form.Text className="text-muted">
            State / Province / Region
          </Form.Text>
        </Form.Group>
      </Row>
      {/*zip */}
      <Row>
        <Form.Group as={Col} controlId="Zip">
          <Form.Label></Form.Label>
          <Form.Control pattern="[0-9]{5}" required />
          <Form.Text className="text-muted">Postal / Zip Code</Form.Text>
        </Form.Group>
        {/*country */}
        <Form.Group as={Col} controlId="Country">
          <Form.Label></Form.Label>
          <Form.Control
            value={country}
            onChange={handleCountryChange}
            required
          />
          <Form.Text className="text-muted">Country</Form.Text>
        </Form.Group>
      </Row>
      {/*phone number */}
      <Form.Group className="mb-3 mt-3" controlId="Phone">
        <Form.Label>Phone*</Form.Label>
        <Form.Control
          type="tel"
          pattern="[0-9]{10}"
          onChange={handlePhoneNumberLength}
          required
        />
        <Form.Text className="text-muted">
          Must be <strong>10</strong> digits.{" "}
          <em>
            Currently entered: <strong>{phoneNumberLength}</strong> digits.
          </em>
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default CheckoutFormBillingAddress;
