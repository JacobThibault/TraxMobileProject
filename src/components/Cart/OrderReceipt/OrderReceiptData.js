import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

const OrderReceiptData = () => {
    //get total amount of the cart
  const cartCtx = useContext(CartContext);

  //sub total
  const subtotal = cartCtx.totalAmount;
  const subtotalString = `$${subtotal.toFixed(2)}`;

  //sales tax
  const salesTax = cartCtx.totalAmount * 0.08;
  const salesTaxString = `$${(cartCtx.totalAmount * 0.08).toFixed(2)}`;

  //total amount
  const totalAmount = salesTax + subtotal;

  //get the discount
  const discountString = `-$${(totalAmount * props.discount).toFixed(2)}`;
  const discount = totalAmount * props.discount;

  //final total amount
  const finalTotalAmount = totalAmount - discount;
  const finalTotalAmountString = `$${finalTotalAmount.toFixed(2)}`;

  const paymentData = {
    subtotal: subtotalString,
    salestax: salesTaxString,
    discount: discountString,
    total: finalTotalAmountString
  };

  return {paymentData};
};

export default OrderReceiptData;