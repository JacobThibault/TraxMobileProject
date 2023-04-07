import { useState} from 'react';
import React from "react";
import classes from "../../Food.module.css";
import CombosFormModal from "../CombosFormModal";
import {Button} from 'react-bootstrap';

const AvailableCombosEntrance = (props) => {
    const [combosIsShown, setCombosIsShown] = useState(false);

    const showCombosHandler = () => {
        setCombosIsShown(true);
    };

    const hideCombosHandler = () => {
        setCombosIsShown(false);
    };
    return(
        <section className={classes.menu}>
            {/*show cart if cartIsShown is true */}
            {combosIsShown && <CombosFormModal onClose={hideCombosHandler} />}
            
                <span>
                    <h1>Pick your combos here!</h1>
                    <Button variant="success" className="mb-3" onClick={showCombosHandler}>Choose Combos</Button>
                </span>
            
        </section>
    );
};
export default AvailableCombosEntrance;