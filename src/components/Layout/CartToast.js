import { Toast } from "react-bootstrap";
import React, { useState } from "react";
import logo from "./Brockp_Gold_Eagles_logo.png";


const CartToast = (props) => {
  //toast variables
  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);

  return (
    <>
      
        <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <img src={logo} height="20px" width="auto" alt="logo"></img>
            <strong className="me-auto">&nbsp;Trax Mobile</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body className="m-3 text-dark">
            <strong>{props.message}</strong> added to cart
          </Toast.Body>
        </Toast>
    
    </>
  );
};

export default CartToast;
