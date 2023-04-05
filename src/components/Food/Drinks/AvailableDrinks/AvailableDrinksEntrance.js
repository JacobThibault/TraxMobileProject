import {useState} from 'react';
import React from "react";
import classes from "../../../Food/Styles/AvailableItems.module.css";
import DrinksFormModal from "../DrinksModal/DrinksFormModal";
import {Button} from 'react-bootstrap';

const AvailableDrinksEntrance = () => {
    const [drinksIsShown, setDrinksIsShown] = useState(false);

    const showDrinksHandler = () => {
        setDrinksIsShown(true);
    };

    const hideDrinksHandler = () => {
        setDrinksIsShown(false);
    };
    return(
        <section className={classes.menu}>
            {/*show cart if cartIsShown is true */}
            {drinksIsShown && <DrinksFormModal onClose={hideDrinksHandler} />}
           
                <span>
                    <h1>Pick your drinks here!</h1>
                    <Button variant="success" className="mb-3" onClick={showDrinksHandler}>Choose Drinks</Button>
                </span>
           
        </section>
    );
};
export default AvailableDrinksEntrance;