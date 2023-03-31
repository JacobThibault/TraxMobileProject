import { Container, Row, Col } from "react-bootstrap";

const AboutTab = () => {
  return (
    <Container>
      <h2>About</h2>
      <Row>
        <Col>
          Choose your favorite entree or snack from our broad selection of
          available menu items and enjoy a delicious meal on the go.
        </Col>
        <Col>
          Click to add items to your cart, pay with points or credit
          card, and pick up in store! Check out the Coupons tab to take part in
          the daily coupon giveaway.
        </Col>
      </Row>
    </Container>
  );
};

export default AboutTab;
