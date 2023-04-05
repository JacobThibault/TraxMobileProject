import { Container } from "react-bootstrap";
import classes from "../../Food/Styles/AvailableItems.module.css";

const AboutTab = () => {
  return (
    <Container>
      <p className={classes.tabContent}>
        Choose your favorite entree or snack from our broad selection of
        available menu items and enjoy a delicious meal on the go.
      </p>
      <p>
        Click to add items to your cart, pay with points or credit card, and
        pick up in store! Check out the <strong>Coupons </strong>
        tab to take part in the daily coupon giveaway.
      </p>
    </Container>
  );
};

export default AboutTab;
