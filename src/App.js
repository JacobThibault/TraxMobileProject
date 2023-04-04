import React, { useState } from "react";

import Header from "./components/Layout/Header";
//import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
//import CartToast from "./components/Layout/CartToast";
//import { ToastContainer } from "react-bootstrap";

//import Card from "../src/components/UI/Card";
//import classes from "../src/components/Food/Entrees/AvailableEntrees/AvailableEntrees.module.css";

import AvailableCombos from "./components/Food/Combos/AvailableCombos/AvailableCombos";
//import AvailableEntreesEntrance from "./components/Food/Entrees/AvailableEntrees/AvailableEntreesEntrance";
//import AvailableEntrees from "./components/Food/Entrees/AvailableEntrees/AvailableEntrees";
import AvailableSides from "./components/Food/Sides/AvailableSides/AvailableSides";
import AvailableSidesEntrance from "./components/Food/Sides/AvailableSides/AvailableSidesEntrance";
import AvailableDrinks from "./components/Food/Drinks/AvailableDrinks/AvailableDrinks";
import AvailableDrinksEntrance from "./components/Food/Drinks/AvailableDrinks/AvailableDrinksEntrance";
import AvailableCombosEntrance from "./components/Food/Combos/AvailableCombos/AvailableCombosEntrance";

import EntreeCarousel from "./components/Layout/MealCarousel/EntreeCarousel";
import Footer from "./components/Layout/Footer";

function App() {
  //show cart
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //show sides
  const [sidesIsShown, setSidesIsShown] = useState(false);
  const showSidesHandler = () => {
    setSidesIsShown(true);
  };
  const hideSidesHandler = () => {
    setSidesIsShown(false);
  };

  //show drinks
  const [drinksIsShown, setDrinksIsShown] = useState(false);
  const showDrinksHandler = () => {
    setDrinksIsShown(true);
  };
  const hideDrinksHandler = () => {
    setDrinksIsShown(false);
  };

  //show combos
  const [combosIsShown, setCombosIsShown] = useState(false);
  const showCombosHandler = () => {
    setCombosIsShown(true);
  };
  const hideCombosHandler = () => {
    setCombosIsShown(false);
  };

  return (
    <>
      {/*toast appears for each item added to cart 
      <ToastContainer position="top-start" className="m-3">
        <CartToast message="Fries"/>
        <CartToast message="Pizza"/>
        <CartToast message="Cheese Burger"/>
      </ToastContainer>
      */}

      <CartProvider>
        {/*show cart if cartIsShown is true */}
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <div id={"home"} className={"anchor"} />
        <Header onShowCart={showCartHandler} />
        <main>
          {/* <Meals /> */}

          {/*entree carousel */}
          <div id={"entrees"} className={"anchor"} />
          <EntreeCarousel />

          <div id={"sides"} className={"anchor"} />
          {sidesIsShown && <AvailableSides onClose={hideSidesHandler} />}
          <AvailableSidesEntrance onShowSide={showSidesHandler} />

          <div id={"drinks"} className={"anchor"} />
          {drinksIsShown && <AvailableDrinks onClose={hideDrinksHandler} />}
          <AvailableDrinksEntrance onShowDrink={showDrinksHandler} />

          <div id={"combos"} className={"anchor"} />
          {combosIsShown && <AvailableCombos onClose={hideCombosHandler} />}
          <AvailableCombosEntrance onShowCombo={showCombosHandler} />
        </main>
      </CartProvider>
      
      {/*footer at bottom */}
      <Footer />
    </>
  );
}

export default App;
