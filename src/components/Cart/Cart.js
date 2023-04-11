import { useState, useContext } from "react";
import CheckoutFormModal from "./CheckoutForm/CheckoutFormModal";
import OrderReceiptModal from "./OrderReceipt/OrderReceiptModal";
import CartReview from "./CartReview";
import CartContext from "../../Store/cart-context";

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

  let cartCtx = useContext(CartContext);
  //populate cartContents with name and amount of product
  let cartContents = cartCtx.items.map((item) => ({
    name: item.name,
    amount: item.amount,
  }));

  //turn cartContents into a string
  let cartContentsString = "";
  for (let i = 0; i < cartContents.length; i++) {
    let item = cartContents[i];
    cartContentsString += `\t ${item.amount}x ${item.name} \n`;
  }

  //----------------------------------------------

  //progress through render switch stages
  const nextStage = () => {
    setCheckoutIndex(checkoutIndex + 1);
  };

  //receipt data
  const [receiptData, setReceiptData] = useState ({
    orderId: null,
    email: null,
    paidWith: null,
    total: null
  });

  //when checkout is submitted, get receipt data
  const handleCreateReceipt = (data) => {
    setReceiptData({
      orderId: data.orderId,
      email: data.email,
      paidWith: data.paidWith,
      total: data.total
    });
    //progress to next stage
    nextStage();
  };

  //cycle through checkout screens
  const renderSwitch = (checkoutIndex) => {
    switch (checkoutIndex) {
      //cart review
      case 0:
        return <CartReview onClose={handleClose} onCheckout={nextStage} />;

      //payment form modal
      case 1:
        return (
          <CheckoutFormModal
            onPayment={handleCreateReceipt}
            onClose={handleClose}
            discount={discount}
            cart={cartContentsString}
          />
        );

      //receipt modal
      case 2:
        return (
          <OrderReceiptModal
            receiptData={receiptData}
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