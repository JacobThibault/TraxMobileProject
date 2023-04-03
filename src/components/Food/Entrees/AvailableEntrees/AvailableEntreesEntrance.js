import EntreesButton from "../EntreesButton";
import React, {Fragment} from "react";
import Card from "../../../UI/Card/Card";
import classes from './AvailableEntrees.module.css'
import { Button }  from 'react-bootstrap';

const AvailableEntreesEntrance = (props) => {
    return(
        <section className= {classes.entrees}>
            <Card>
                <span>
                    <h1>Pick your entrees here!</h1>
                    <Button variant="success" onClick={props.onShowEntree}> Choose Entrees</Button>
                </span>
            </Card>
        </section>
    );
};
export default AvailableEntreesEntrance;