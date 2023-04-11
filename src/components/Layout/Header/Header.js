import { useState, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import background from "../../../assets/trax.jpg";
import { Container, Nav, Navbar, Stack, } from "react-bootstrap";
import HomeTab from "../MainCard/Tab/HomeTab";
import AboutTab from "../MainCard/Tab/AboutTab";
import CouponsTab from "../MainCard/Tab/CouponsTab";
import FAQTab from "../MainCard/Tab/FAQTab";
import CardPagination from "../MainCard/CardPagination";
import logo from "../Brockp_Gold_Eagles_logo.png";
import classes from "./Header.module.css";
import tab from "./Tab.module.css";

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
        return <CouponsTab discount={handleDiscount} />;
      case "FAQ":
        return <FAQTab />;
      default:
        <HomeTab />;
    }
  };

  //send the coupon to cart
  const handleDiscount = (value) => {
    props.discount(value);
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
          {/*eagle logo */}
          <img src={logo} height="50px" width="auto" alt="logo"></img>
          &nbsp; Trax Mobile
        </h1>
        {/*cart button */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes.second}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="mx-auto">
              {/*navigation links */}
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
        <img src={background} alt="Trax Brockport" />
      </div>

      {/*show different main cards */}
      <section className={tab.summary}>
        <h1 className={tab.title}>{nav}</h1>
        {showCard(nav)}

        {/*nav buttons */}
        <CardPagination navSet={handleSetNav} nav={nav} />
      </section>
    </>
  );
};

export default Header;
