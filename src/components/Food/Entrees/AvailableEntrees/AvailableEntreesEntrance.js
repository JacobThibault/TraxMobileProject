import React, { useState} from "react";
import classes from "../../Food.module.css";
import EntreesFormModal from "../EntreesFormModal";
import {Button} from 'react-bootstrap';

const AvailableEntreesEntrance = () => {
    const [entreesIsShown, setEntreesIsShown] = useState(false);

    const showEntreesHandler = () => {
        setEntreesIsShown(true);
    };

    const hideEntreesHandler = () => {
        setEntreesIsShown(false);
    };


    return(
        <section className={classes.entrees}>
            {/*show cart if cartIsShown is true */}
            {entreesIsShown && <EntreesFormModal onClose={hideEntreesHandler} />}
                <span>
                    <Button variant="success" onClick={showEntreesHandler}>Choose Entrees</Button>
                </span>
            
        </section>
    );
};
export default AvailableEntreesEntrance;