import React from "react";
import Card from "../../../UI/Card/Card";
import classes from './AvailableEntrees.module.css'

const AvailableEntreesEntrance = (props) => {
    return(
        <section className= {classes.entrees}>
            <Card>
                <span>
                    <h1>Pick your entrees here!</h1>
                    <button onClick={props.onShowEntree}/>
                </span>
            </Card>
        </section>
    );
};
export default AvailableEntreesEntrance;