import { useState, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import HomeTab from "./MainCard/HomeTab";
import AboutTab from "./MainCard/AboutTab";
import CouponsTab from "./MainCard/CouponsTab";
import FAQTab from "./MainCard/FAQTab";
import styles from "./MainCard/MainCard.module.css";
import logo from "./Brockp_Gold_Eagles_logo.png";
import tab from "../Food/Styles/AvailableItems.module.css";
import CardPagination from "./MainCard/CardPagination";


const Header = (props) => {
  //default card is home
  const [nav, setNav] = useState("Home");
  const handleSetNav = (value) => {
    setNav(value);
  };

  //show different main cards based on dropdown value
  const showCard = (value) => {
    switch (value) {
      case "Home":
        return <HomeTab />;
      case "About":
        return <AboutTab />;
      case "Coupons":
        return <CouponsTab code={sendCoupon}/>;
      case "FAQ":
        return <FAQTab />;
      default:
        <HomeTab />;
    }
  };

  //send the coupon to cart
  const sendCoupon = (code) => {
    props.code(code);
  };

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <header
        className={classes.header}
        //scroll to top of page is header is clicked
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <h1>
          <img src={logo} height="50px" width="auto" alt="logo"></img>
          &nbsp; Trax Mobile
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes.second}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="mx-auto">
              <Stack direction="horizontal" gap={5}>
                <Nav.Link href="#entrees" className="text-light">
                  Entrees
                </Nav.Link>
                <Nav.Link href="#sides" className="text-light">
                  Sides
                </Nav.Link>
                <Nav.Link href="#drinks" className="text-light">
                  Drinks
                </Nav.Link>
                <Nav.Link href="#combos" className="text-light">
                  Combos
                </Nav.Link>
              </Stack>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/*background image */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food served at Brockport" />
      </div>

      {/*show different main cards */}
      <section className={styles.summary}>
       
          <h1 className={tab.title}>{nav}</h1>
          {showCard(nav)}

          {/*nav buttons */}
          
            <CardPagination navSet={handleSetNav} nav={nav} />
         
       
      </section>
      
    </>
  );
};

export default Header;
