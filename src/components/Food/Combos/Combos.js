import {Fragment, useState} from 'react';

import CombosSummary from "./CombosSummary/CombosSummary";
import AvailableCombos from "./AvailableCombos/AvailableCombos";
import EntreesButton from "../Entrees/EntreesButton";
import AvailableEntrees from "../Entrees/AvailableEntrees/AvailableEntrees";
import CombosButton from "./CombosButton";

const Combos = () => {
    const [combosIsShown, setComboIsShown] = useState(false);

    const showCombosHandler = () => {
        setComboIsShown(true);
    }
    const hideCombosHandler = () => {
        setComboIsShown(false);
    }
    return (
        <Fragment>
            {combosIsShown && <CombosButton onClose={hideCombosHandler}/>}
            <AvailableCombos onClose={showCombosHandler}/>
        </Fragment>
    );
};

export default Combos;