import {Fragment} from 'react';
import SidesButton from "../SidesButton";
import React from "react";
import Card from "../../../UI/Card/Card";
import classes from './AvailableSides.module.css'

const AvailableSidesEntrance = (props) => {
    return(
        <section className={classes.sides}>
            <Card>
                <Fragment>
                    <h1>Pick your sides here!</h1>
                    <SidesButton onClick={props.onShowSide}/>
                </Fragment>
            </Card>
        </section>
    );
};
export default AvailableSidesEntrance;