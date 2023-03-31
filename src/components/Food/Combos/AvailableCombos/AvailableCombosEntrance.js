import CombosButton from "../CombosButton";
import react, {Fragment} from 'react';
import React from "react";
import Card from "../../../UI/Card/Card";
import classes from './AvailableCombos.module.css'

const AvailableCombosEntrance = (props) => {
    return(
        <section className={classes.combos}>
            <Card>
                <Fragment>
                    <h1>Pick your combos here!</h1>
                    <CombosButton onClick={props.onShowCombo}/>
                </Fragment>
            </Card>
        </section>
    );
};
export default AvailableCombosEntrance;