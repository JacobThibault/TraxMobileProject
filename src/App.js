import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
//import CartReview from "./components/Cart/CartReview";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [nav, setNav] = useState("");
  const handleSetNav = (value) => {
    setNav(value);
  };

  return (
    <CartProvider>
      {/*show cart if cartIsShown is true */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} navSelect={handleSetNav}/>
      <main>
        <Meals navSelect={nav}/>
      </main>
    </CartProvider>
  );
}

export default App;
