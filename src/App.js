import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
//import CartToast from "./components/Layout/CartToast";
//import { ToastContainer } from "react-bootstrap";

import AvailableCombos from "./components/Food/Combos/AvailableCombos/AvailableCombos";
import AvailableEntreesEntrance from "./components/Food/Entrees/AvailableEntrees/AvailableEntreesEntrance";
import AvailableEntrees from "./components/Food/Entrees/AvailableEntrees/AvailableEntrees";
import AvailableSides from "./components/Food/Sides/AvailableSides/AvailableSides";
import AvailableSidesEntrance from "./components/Food/Sides/AvailableSides/AvailableSidesEntrance";
import AvailableDrinks from "./components/Food/Drinks/AvailableDrinks/AvailableDrinks";
import AvailableDrinksEntrance from "./components/Food/Drinks/AvailableDrinks/AvailableDrinksEntrance";
import AvailableCombosEntrance from "./components/Food/Combos/AvailableCombos/AvailableCombosEntrance";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [entreesIsShown, setEntreesIsShown] = useState(false);
  const showEntreesHandler = () => {
      setEntreesIsShown(true);
  }
  const hideEntreesHandler = () => {
      setEntreesIsShown(false);
  }

  const [sidesIsShown, setSidesIsShown] = useState(false);
  const showSidesHandler = () => {
      setSidesIsShown(true);
  }
  const hideSidesHandler = () => {
      setSidesIsShown(false);
  }

  const [drinksIsShown, setDrinksIsShown] = useState(false);
  const showDrinksHandler = () => {
      setDrinksIsShown(true);
  }
  const hideDrinksHandler = () => {
      setDrinksIsShown(false);
  }

  const [combosIsShown, setCombosIsShown] = useState(false);
  const showCombosHandler = () => {
      setCombosIsShown(true);
  }
  const hideCombosHandler = () => {
      setCombosIsShown(false);
  }

  return (
    <>
    {/*toast appears for each item added to cart 
      <ToastContainer position="top-start" className="m-3">
        <CartToast message="Fries"/>
        <CartToast message="Pizza"/>
      </ToastContainer>
      */}

      <CartProvider>
        {/*show cart if cartIsShown is true */}
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
         {/* <Meals /> */}
          <div id={"entrees"} className={"anchor"}/>
              {entreesIsShown && <AvailableEntrees onClose={hideEntreesHandler}/>}
              <AvailableEntreesEntrance onShowEntree={showEntreesHandler}/>

              <div id={"sides"} className={"anchor"}/>
              {sidesIsShown && <AvailableSides onClose={hideSidesHandler}/>}
              <AvailableSidesEntrance onShowSide={showSidesHandler}/>

              <div id={"drinks"} className={"anchor"}/>
              {drinksIsShown && <AvailableDrinks onClose={hideDrinksHandler}/>}
              <AvailableDrinksEntrance onShowDrink={showDrinksHandler}/>

              <div id={"combos"} className={"anchor"}/>
              {combosIsShown && <AvailableCombos onClose={hideCombosHandler}/>}
              <AvailableCombosEntrance onShowCombo={showCombosHandler}/>
        </main>
      </CartProvider>
    </>
  );
}

export default App;
