//React imports
import React, { useState} from "react";

//Cart imports
import Cart from "./components/Cart/Cart";

//Cart imports
import CartProvider from "./Store/CartProvider";

//Layout imports
import EntreeCarousel from "./components/Layout/FoodItemCarousels/EntreeCarousel/EntreeCarousel";
import SideCarousel from "./components/Layout/FoodItemCarousels/SideCarousel/SideCarousel";
import DrinksCarousel from "./components/Layout/FoodItemCarousels/DrinksCarousel/DrinksCarousel";
import CombosCarousel from "./components/Layout/FoodItemCarousels/CombosCarousel/CombosCarousel";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer";

function App() {

  //Restructuring to change the state of the visibility of the cart
  const [cartIsShown, setCartIsShown] = useState(false);

  //Handler to make the cart visible
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  //Handler to remove the visibility of the cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //Restructuring to change the state of the discount amount
  const [discount, setDiscount] = useState(0);

  //Handler to set the current amount of the discount for later use
  const handleSetDiscount = (value) => {
    setDiscount(value.discount);
  };

  return (
    <>
      <CartProvider>

        {/*show cart if cartIsShown is true */}
        {cartIsShown && <Cart onClose={hideCartHandler} discount={discount} />}

        {/*Anchor for home Navbar and also sets the css*/}
        <div id={"home"} className={"anchor"} />

        {/*Header component to be put on top of screen - takes in props for cart/discount*/}
        <Header onShowCart={showCartHandler} discount={handleSetDiscount} />

        {/*Anchor for entrées Navbar and also sets the css*/}
        <div id={"entrees"} className={"anchor"} />
        {/*Entrees carousel */}
        <EntreeCarousel />

        {/*Anchor for sides Navbar and also sets the css*/}
        <div id={"sides"} className={"anchor"} />
        {/*Sides carousel */}
        <SideCarousel />

        {/*Anchor for drinks Navbar and also sets the css*/}
        <div id={"drinks"} className={"anchor"} />
        {/*Drinks carousel */}
        <DrinksCarousel />

        {/*Anchor for combos Navbar and also sets the css*/}
        <div id={"combos"} className={"anchor"} />
        {/*Combos carousel */}
        <CombosCarousel />

      </CartProvider>
      {/*Footer component to be at bottom of screen */}
      <Footer />
    </>
  );
}

export default App;
