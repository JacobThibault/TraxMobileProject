import { Container } from "react-bootstrap";
import classes from "../../Food/Styles/AvailableItems.module.css";

const HomeTab = () => {
  return (<>
      <p className={classes.tabContent}>
        Located on the ground floor of Harrison Hall, the award-winning TRAX
        features a hot bar with ready-to-go foods for those late night snacks or
        meals.
      </p>
      <p>Credit/debit, Easy Money, and Points are accepted.</p>
    </>
  );
};

export default HomeTab;
