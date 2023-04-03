import {
  Button,
  Spinner,
  Form,
  Card,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "../Brockp_Gold_Eagles_logo.png";

const CouponsTab = () => {
  //generate a random string code
  const [code, setCode] = useState();
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
    return setCode(result);
  };

  //change color of button
  const [couponFlag, setCouponFlag] = useState("success");
  const handleSetCouponFlag = () => {
    return setCouponFlag("danger");
  };

  //toast variables
  const [showToast, setShowToast] = useState(false);
  const toggleShowToast = () => setShowToast(!showToast);

  //manage loading flag
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    //only generate once
    if (couponFlag !== "danger") {
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

  return (
    <>
      <Card bg="secondary p-2 mb-2">
        <h2>Daily Coupon Lottery</h2>
      </Card>
      <Form.Group>
        <Form.Label>Get your random coupon code for today!</Form.Label>
      </Form.Group>

      <Button
        variant={couponFlag}
        onClick={handleLoading}
        className="mt-3 mb-2"
      >
        {showSpinner()}
      </Button>
      <ToastContainer position="middle-center">
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <img src={logo} height="20px" width="auto" alt="logo"></img>
            <strong className="me-auto">&nbsp;Trax Mobile</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body className="m-3 text-dark"><h5>You already have a code.</h5></Toast.Body>
        </Toast>
      </ToastContainer>

      <Form.Group>
        <Form.Label>
          Coupon Code:
          <Form.Control value={code} disabled className="mt-2" />{" "}
        </Form.Label>
      </Form.Group>
    </>
  );
};

export default CouponsTab;
