import {Fragment, useState} from 'react';

import AvailableEntrees from "./AvailableEntrees/AvailableEntrees";
import EntreesButton from "./EntreesButton";

const Entrees = () => {
    const [entreesIsShown, setEntreesIsShown] = useState(false);

    const showEntreesHandler = () => {
        setEntreesIsShown(true);
    }
    const hideEntreesHandler = () => {
        setEntreesIsShown(false);
    }

    return (
        <Fragment>
            {entreesIsShown && <EntreesButton onClose={hideEntreesHandler}/>}
            <AvailableEntrees onClose={showEntreesHandler}/>
        </Fragment>
    );
};

export default Entrees;