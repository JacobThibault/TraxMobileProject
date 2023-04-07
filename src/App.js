import React, { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
//import CartToast from "./components/Layout/CartToast";
//import { ToastContainer } from "react-bootstrap";

import EntreeCarousel from "./components/Layout/MealCarousel/EntreeCarousel/EntreeCarousel";
import Footer from "./components/Layout/Footer";
import SideCarousel from "./components/Layout/MealCarousel/SideCarousel/SideCarousel";
import DrinksCarousel from "./components/Layout/MealCarousel/DrinksCarousel/DrinksCarousel";
import CombosCarousel from "./components/Layout/MealCarousel/CombosCarousel/CombosCarousel";

function App() {
  //show cart
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //handle coupon code
  const [discount, setDiscount] = useState("");
  const handleSetDiscount = (value) => {
    setDiscount(value.discount);
  };

  return (
    <>

      <CartProvider>
        {/*show cart if cartIsShown is true */}
        {cartIsShown && <Cart onClose={hideCartHandler} discount={discount} />}
        <div id={"home"} className={"anchor"} />
        <Header onShowCart={showCartHandler} discount={handleSetDiscount} />
        {/*meal carousel */}
        <div id={"entrees"} className={"anchor"} />
        <EntreeCarousel />

        <div id={"sides"} className={"anchor"} />
        <SideCarousel />

        <div id={"drinks"} className={"anchor"} />
        <DrinksCarousel />

        <div id={"combos"} className={"anchor"} />
        <CombosCarousel />
      </CartProvider>

      {/*footer at bottom */}
      <Footer />
    </>
  );
}

export default App;
