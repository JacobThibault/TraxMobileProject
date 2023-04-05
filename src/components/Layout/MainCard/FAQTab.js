import {
  Container,
  Row,
  Col,
  Button,
  Popover,
  OverlayTrigger,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainCard.module.css";
import classes from "../../Food/Styles/AvailableItems.module.css";

const FAQTab = () => {
  const getOrder = (
    <Popover>
      <Popover.Header as="h3">Having trouble with pickup?</Popover.Header>
      <Popover.Body>
        Check the inbox of the email address you provided during checkout for
        your <strong>Order ID</strong>. You need to provide this to a TRAX
        employee to pick up your order.
      </Popover.Body>
    </Popover>
  );

  const howToPay = (
    <Popover>
      <Popover.Header as="h3">Payment</Popover.Header>
      <Popover.Body>
        When in the payment window of checkout, you can{" "}
        <strong>check the switch </strong>
        to pay with card. Otherwise{" "}
        <strong>by default, you will pay with points </strong>
        associated with the Banner ID you submitted.
      </Popover.Body>
    </Popover>
  );

  const findOrderId = (
    <Popover>
      <Popover.Header as="h3">Finding Order Id</Popover.Header>
      <Popover.Body>
        To <strong>find your Order ID</strong> you can first locate it in the{" "}
        <strong>receipt window</strong> during checkout. If you've already
        closed this window, you can{" "}
        <strong>find it in a receipt emailed to you</strong>
      </Popover.Body>
    </Popover>
  );

  const lottery = (
    <Popover>
      <Popover.Header as="h3">Coupon Lottery</Popover.Header>
      <Popover.Body>
        The coupon lottery is a <strong>daily coupon give-away </strong>
        where you have the chance to get a random{" "}
        <strong>free coupon code </strong>
        to use at checkout!
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <Container>
        <Form.Group>
          <Form.Label className="mt-3">Commonly asked questions:</Form.Label>
        </Form.Group>
        <Row className="justify-content-md-center, mt-3">
          <Col>
            <OverlayTrigger trigger="focus" placement="top" overlay={howToPay}>
              <Button variant="success" className="p-3">
                Pay with points or credit card?
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger trigger="focus" placement="top" overlay={getOrder}>
              <Button variant="success" className="p-3">
                How do I get my order?
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              trigger="focus"
              placement="top"
              overlay={findOrderId}
            >
              <Button variant="success" className="p-3">
                Where is my Order ID?
              </Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger trigger="focus" placement="top" overlay={lottery}>
              <Button variant="success" className="p-3">
                What is the coupon lottery?
              </Button>
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="right">
            Question not here? <a href="https://www.google.com/">Contact us.</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FAQTab;
