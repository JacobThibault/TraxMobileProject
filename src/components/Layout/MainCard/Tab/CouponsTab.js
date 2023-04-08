import {
  Button,
  Spinner,
  Form,
  Container,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";

const CouponsTab = (props) => {
  //generate a random string code
  const [discount, setDiscount] = useState(0);
  const [loadedCoupons, setLoadedCoupons] = useState([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await fetch(
        "https://foodapp-a3f77-default-rtdb.firebaseio.com/Coupons.json"
      );
      const responseData = await response.json();

      const coupons = [];
      for (const key in responseData) {
        coupons.push({
          id: key,
          code: responseData[key].code,
          discount_percentage: responseData[key].discount_percentage,
        });
      }
      setLoadedCoupons(coupons);
    };
    fetchCoupons();
  }, []);

  const handleSetCoupon = () => {
    let result = Math.floor(Math.random() * 101);
    if (result <= 20) {
      setDiscount(0);
    } else if (result <= 70 && result >= 21) {
      setDiscount(loadedCoupons.at(2).discount_percentage);
    } else if (result <= 90 && result >= 71) {
      setDiscount(loadedCoupons.at(1).discount_percentage);
    } else if (result <= 100 && result >= 91) {
      setDiscount(loadedCoupons.at(0).discount_percentage);
    }
    return discount;
  };

  //change color of button
  const [couponFlag, setCouponFlag] = useState(true);
  const handleSetCouponFlag = () => {
    return setCouponFlag(false);
  };

  //manage loading flag
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    //only generate once
    if (couponFlag) {
      setLoading(!loading);
    }
  };

  //show spinner and calc code
  const showSpinner = () => {
    if (loading) {
      //wait 5000ms and then stop loading, generate code
      setTimeout(() => {
        handleLoading();
        handleSetCoupon();
        handleSetCouponFlag();
      }, 5000);

      //show loading spinner
      return (
        <>
          <Spinner
            as="span"
            variant="light"
            size="sm"
            role="status"
            animation="border"
          />
          Loading...
        </>
      );
    }
    //remove loading spinner
    else return <>Generate Coupon</>;
  };

  //send code to cart
  const discountToCart = () => {
    handleToolTip();
    props.discount({discount});
  };

  //hide tooltip after a second
  const handleToolTip = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Container>
      <Form.Group>
        <Form.Label className="mt-3">
          Click for a random % off your order!
        </Form.Label>
      </Form.Group>

      <Button
        variant="success"
        onClick={handleLoading}
        className="mt-3 mb-2"
        disabled={!couponFlag ? true : false}
      >
        {showSpinner()}
      </Button>

      <Form.Group>
        <Form.Label>
          Discount Off:
          <Form.Control
            value={100 * discount + "%"}
            className="mt-2"
            readOnly
          />
          {!couponFlag && (
            <Button ref={target} variant="secondary" size="sm" placement="right" onClick={discountToCart}>
              Apply Discount
            </Button>
          )}
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Applied!
              </Tooltip>
            )}
          </Overlay>
        </Form.Label>
      </Form.Group>
    </Container>
  );
};

export default CouponsTab;
