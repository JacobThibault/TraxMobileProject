import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import forms from "./CheckoutForm.module.css"

const OrderSummary = (props) => {
  //get total amount of the cart
  const cartCtx = useContext(CartContext);

  //get the discount
  const discount = props.discount;

  //sub total
  const subtotal = cartCtx.totalAmount;
  const subtotalString = `$${subtotal.toFixed(2)}`;

  //sales tax
  const salesTax = cartCtx.totalAmount * 0.08;
  const salesTaxString = `$${(cartCtx.totalAmount * 0.08).toFixed(2)}`;

  //total amount
  const totalAmount = salesTax + subtotal;
  const totalAmountString = `$${totalAmount.toFixed(2)}`;

  return (
    <div>
      <span className={forms.title}>Order Summary</span>
      <div className={forms.subtotal}>
        <span>Subtotal</span>
        <span>{subtotalString}</span>
      </div>

      <div className={forms.salesTax}>
        <span>Sales tax</span>
        <span>{salesTaxString}</span>
      </div>

      <div className={forms.salesTax}>
        <span>Discount</span>
        <span>{discount}</span>
      </div>
      
      <div className={forms.total}>
        <span>Total</span>
        <span>{totalAmountString}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
