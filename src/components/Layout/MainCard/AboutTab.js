import { Container, Card } from "react-bootstrap";

const AboutTab = () => {
  return (
    <Container>
      <Card bg="secondary p-2 mb-5">
      <h2>About</h2></Card>
      <p>
          Choose your favorite entree or snack from our broad selection of
          available menu items and enjoy a delicious meal on the go.
        </p><p>
          Click to add items to your cart, pay with points or credit
          card, and pick up in store! Check out the <strong>Coupons </strong>
          tab to take part in the daily coupon giveaway.
        </p>
    </Container>
  );
};

export default AboutTab;
