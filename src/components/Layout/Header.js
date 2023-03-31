import React, { Fragment } from 'react';
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from "./Header.module.css";
const Header = props =>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1> Trax Meals </h1>
                {/*<div className={classes.navbar}>
                    <a href="#entrees">Entrees</a>
                    <a href="#sides">Sides</a>
                    <a href="#drinks">Drinks</a>
                    <a href="#combos">Combos</a>
    </div>*/}
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Food served at Brockport'/>
            </div>
        </Fragment>
    )
};


export default Header;