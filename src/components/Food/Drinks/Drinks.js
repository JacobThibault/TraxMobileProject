import {Fragment, useState} from 'react';

import DrinksSummary from "./DrinksSummary/DrinksSummary";
import AvailableDrinks from "./AvailableDrinks/AvailableDrinks";
import EntreesButton from "../Entrees/EntreesButton";
import AvailableEntrees from "../Entrees/AvailableEntrees/AvailableEntrees";
import DrinksButton from "./DrinksButton";

const Drinks = () => {
    const [drinksIsShown, setDrinksIsShown] = useState(false);

    const showDrinksHandler = () => {
        setDrinksIsShown(true);
    }
    const hideDrinksHandler = () => {
        setDrinksIsShown(false);
    }


    return (
        <Fragment>
            drinksIsShown && <DrinksButton onClose={hideDrinksHandler}/>}
            <AvailableDrinks onClose={showDrinksHandler}/>
        </Fragment>
    );
};

export default Drinks;