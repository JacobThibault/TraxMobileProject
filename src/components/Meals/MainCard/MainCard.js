import classes from "./MainCard.module.css";
import { Tab, Card, Col, Row, Nav} from "react-bootstrap";
import HomeTab from "./HomeTab";
import AboutTab from "./AboutTab";
import FAQTab from "./FAQTab";
import CouponsTab from "./CouponsTab";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <Tab.Container defaultActiveKey="home">
      <Row>
        <Col sm={3}>
          <Card className="p-2">
          <Nav variant='pills' className="flex-column">
            <Nav.Item >
              <Nav.Link eventKey="home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="coupons">Coupons</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="faq">FAQ</Nav.Link>
            </Nav.Item>
          </Nav>
          </Card>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <HomeTab/>
            </Tab.Pane>
            <Tab.Pane eventKey="coupons">
              <CouponsTab/>
            </Tab.Pane>
            <Tab.Pane eventKey="about">
              <AboutTab />
            </Tab.Pane>
            <Tab.Pane eventKey="faq">
              <FAQTab />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </section>
  );
};

export default MealsSummary;
