import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import forms from "./CheckoutForm.module.css";

const OrderSummary = (props) => {
  //get total amount of the cart
  const cartCtx = useContext(CartContext);

  //sub total
  const subtotal = cartCtx.totalAmount;
  const subtotalString = `$${subtotal.toFixed(2)}`;

  //get the discount
  const discountString = `-$${(subtotal * props.discount).toFixed(2)}`;
  const discount = subtotal * props.discount;

  //total amount
  const totalAmount = subtotal - discount;

  //sales tax
  const salesTax = totalAmount * 0.08;
  const salesTaxString = `$${(salesTax).toFixed(2)}`;

  //final total amount
  const finalTotalAmount = totalAmount + salesTax;
  const finalTotalAmountString = `$${finalTotalAmount.toFixed(2)}`;

  //send final total to checkout
  const sendTotal = () => {
    props.total(finalTotalAmountString);
  };

  return (
    <div>
      {/*title */}
      <span className={forms.title}>Order Summary</span>

      {/*subtotal */}
      <div className={forms.subtotal}>
        <span>Subtotal</span>
        <span>{subtotalString}</span>
      </div>

      {/*discount % */}
      <div className={forms.salesTax}>
        <span>Discount</span>
        <span>{discountString}</span>
      </div>

      {/*sales tax */}
      <div className={forms.salesTax}>
        <span>Sales tax</span>
        <span>{salesTaxString}</span>
      </div>

      {/*total */}
      <div className={forms.total}>
        <span>Total</span>
        <span>{finalTotalAmountString}</span>

        {
          //send props back with total
          sendTotal()
        }
      </div>
    </div>
  );
};

export default OrderSummary;
