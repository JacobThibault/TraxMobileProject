import { useState } from "react";
import CheckoutFormModal from "./CheckoutForm/CheckoutFormModal";
import OrderReceiptModal from "./OrderReceipt/OrderReceiptModal";
import CartReview from "./CartReview";

const Cart = (props) => {
  
  //discount
  let discount = props.discount;

  //close modal
  const handleClose = () => {
    //open and close in App.js
    props.onClose();
  };

  //checkout navigation
  const [checkoutIndex, setCheckoutIndex] = useState(0);

  //refresh the page
  const refreshPage = () => {
    window.location.reload(false);
  };

  //----------------------------------------------
  //get total amount from order summary
  const [totalAmount, setTotalAmount] = useState();
  const handleTotal = (value) => {
    setTotalAmount(value);
    console.log(value);
  };

  //orderId to send to receipt
  const [orderId, setOrderId] = useState();
  const handleOrderId = (event) => {
    setOrderId(event);
  };

  //orderEmail to send to receipt
  const [orderEmail, setOrderEmail] = useState();
  const handleOrderEmail = (event) => {
    setOrderEmail(event);
  };

  //orderPaidWith to send to receipt
  const [orderPaidWith, setOrderPaidWith] = useState();
  const handleOrderPaidWith = (event) => {
    setOrderPaidWith(event);
  }; 

  //----------------------------------------------

  //progress through render switch stages
  const nextStage = () => {
    setCheckoutIndex(checkoutIndex + 1);
  };

  //when checkout is submitted
  const handleCreateReceipt = (data) => {
    //send order id
    handleOrderId(data.orderId);
    //send email
    handleOrderEmail(data.email);
    //send payment method
    handleOrderPaidWith(data.paidWith);

    //progress to next section
    nextStage();
  };

  //cycle through checkout screens
  const renderSwitch = (checkoutIndex) => {
    switch (checkoutIndex) {
      //cart review
      case 0:
        return <CartReview onClose={handleClose} onCheckout={nextStage}/>;

      //payment form modal
      case 1:
        return (     
          <CheckoutFormModal
            onPayment={handleCreateReceipt}
            onClose={handleClose}
            discount={discount}
            total={handleTotal}
            orderId={orderId}
          />
        );

      //receipt modal
      case 2:
        return (
          <OrderReceiptModal
            orderId={orderId}
            email={orderEmail}
            total={totalAmount}
            paidWith={orderPaidWith}
            refresh={refreshPage}
          />
        );

      //abandon ship and refresh page if it breaks
      default:
        return refreshPage();
    }
  };

  return (
    <div>
      
      {/*flip through cart modals */}
      {renderSwitch(checkoutIndex)}
    </div>
  );
};

export default Cart;
