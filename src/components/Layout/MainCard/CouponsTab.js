import {
  Button,
  Spinner,
  Form,
  Toast,
  ToastContainer,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "../Brockp_Gold_Eagles_logo.png";

const CouponsTab = (props) => {
  //generate a random string code
  const [discount, setDiscount] = useState();

  const handleSetCode = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //generate string
    for (let i = 0; i < 15; i++) {
      //get random character from character list
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return setDiscount(result);
  };

  //change color of button
  const [couponFlag, setCouponFlag] = useState(true);
  const handleSetCouponFlag = () => {
    return setCouponFlag(false);
  };

  //toast variables
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);

  //manage loading flag
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    //only generate once
    if (couponFlag) {
      setLoading(!loading);
    } else {
      //show warning toast
      toggleShowToast();
    }
  };

  //show spinner and calc code
  const showSpinner = () => {
    if (loading) {
      //wait 5000ms and then stop loading, generate code
      setTimeout(() => {
        handleLoading();
        handleSetCode();
        handleSetCouponFlag();
      }, 5000);

      //show loading spinner
      return (
        <>
          <Spinner
            as="span"
            variant="light"
            size="sm"
            role="status"
            animation="border"
          />
          Loading...
        </>
      );
    }
    //remove loading spinner
    else return <>Generate Coupon</>;
  };

  //send code to cart
  const discountToCart = () => {
    props.discount({ discount });
    setShow(!show);
    toggleShowToast();
  };

  const [show, setShow] = useState(false);

  return (
    <Container>
      <Form.Group>
        <Form.Label className="mt-3">
          Click for a random % off your order!
        </Form.Label>
      </Form.Group>

      <Button
        variant="success"
        onClick={handleLoading}
        className="mt-3 mb-2"
        disabled={!couponFlag ? true : false}
      >
        {showSpinner()}
      </Button>

      <Form.Group>
        <Form.Label>
          Coupon Code:
          <Form.Control
            value={discount}
            className="mt-2"
            onClick={toggleShowToast}
            readOnly
          />
        </Form.Label>
      </Form.Group>

      <ToastContainer position="middle-center">
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <img src={logo} height="20px" width="auto" alt="logo"></img>
            <strong className="me-auto">&nbsp;Trax Mobile</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body className="m-3 text-dark">
            <h5>Apply Coupon?</h5>
            <Button variant="success" className="mt-1 mb-4" onClick={discountToCart}>
              Apply
            </Button>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default CouponsTab;
