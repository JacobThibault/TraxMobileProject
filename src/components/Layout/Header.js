import React, { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import image from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        
        <h1>TRAX Mobile</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={image} alt="A table of food!"/>
      </div>
    </Fragment>
  );
};

export default Header;
