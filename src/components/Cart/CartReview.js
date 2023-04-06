import classes from "./Cart.module.css";
import { Modal, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import forms from "./CheckoutForm/CheckoutForm.module.css";

const CartReview = (props) => {
  
  //const code = props.code;
  
  //modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.onClose();
  };

  //total amount to send to receipt
  let cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  //remove cart items
  const cartItemRemoveHander = (id) => {
    cartCtx.removeItem(id);
  };

  //add cart items
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  //find if cart is empty or not
  const hasItems = cartCtx.items.length > 0;

  //populate cartitems with what is in the cart
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          //bind ensures the id of the item is passed, preconfiguring the argument
          onRemove={cartItemRemoveHander.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  //submit to checkout
  const handleSubmit = () => {
    props.onCheckout();
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        dialogClassName={forms.modalSize}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*display empty cart message */}
          {!hasItems && (
            <span className={classes.empty}>
              Your cart is empty, let's fix that...
            </span>
          )}

          {/*show cart items*/}
          {cartItems}

          {/*bottom of the cart */}
          {hasItems && (
            <div className={forms.total}>
              <span>Total Amount: </span>
              <span>{totalAmount}</span>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/*close button */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/*show checkout button if there are items in cart */}
          {hasItems && (
            <Button variant="success" onClick={handleSubmit}>
              Checkout
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartReview;
