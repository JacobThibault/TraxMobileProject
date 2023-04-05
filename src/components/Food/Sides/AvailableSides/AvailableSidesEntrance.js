import {useState} from 'react';
import React from "react";
import classes from "../../../Food/Styles/AvailableItems.module.css";
import SidesFormModal from "../SidesModal/SidesFormModal";
import {Button} from 'react-bootstrap';

const AvailableSidesEntrance = () => {
    const [sidesIsShown, setSidesIsShown] = useState(false);

    const showSidesHandler = () => {
        setSidesIsShown(true);
    };

    const hideSidesHandler = () => {
        setSidesIsShown(false);
    };
    return(
        <section className={classes.menu}>
            {/*show cart if cartIsShown is true */}
            {sidesIsShown && <SidesFormModal onClose={hideSidesHandler} />}
            
                <span>
                    <h1>Pick your sides here!</h1>
                    <Button variant="success" className="mb-3" onClick={showSidesHandler}>Choose Sides</Button>
                </span>
            
        </section>
    );
};
export default AvailableSidesEntrance;