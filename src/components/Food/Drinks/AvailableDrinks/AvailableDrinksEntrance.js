import DrinksButton from "../DrinksButton";
import react, {Fragment} from 'react';
import React from "react";
import Card from "../../../UI/Card/Card";
import classes from './AvailableDrinks.module.css'

const AvailableDrinksEntrance = (props) => {
    return(
        <section className={classes.drinks}>
            <Card>
                <Fragment>
                    <h1>Pick your drinks here!</h1>
                    <DrinksButton onClick={props.onShowDrink}/>
                </Fragment>
            </Card>
        </section>
    );
};
export default AvailableDrinksEntrance;