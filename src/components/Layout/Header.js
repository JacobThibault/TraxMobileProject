import { useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
  Badge,
} from "react-bootstrap";
import HomeTab from "./MainCard/HomeTab";
import AboutTab from "./MainCard/AboutTab";
import CouponsTab from "./MainCard/CouponsTab";
import FAQTab from "./MainCard/FAQTab";
import styles from "./MainCard/MainCard.module.css";
import logo from "./Brockp_Gold_Eagles_logo.png";

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
        return <CouponsTab />;
      case "FAQ":
        return <FAQTab />;
      default:
        <HomeTab />;
    }
  };

  return (
    <>
      <header className={classes.header}>
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
              <Badge bg="secondary">
                  <NavDropdown title={nav}>
                    <NavDropdown.Item onClick={() => handleSetNav("Home")}>
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleSetNav("About")}>
                      About
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleSetNav("Coupons")}>
                      Coupons
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => handleSetNav("FAQ")}>
                      FAQ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Badge>
                <Nav.Link href="#entrees" className="text-light">Entrees</Nav.Link>
                <Nav.Link href="#sides" className="text-light">Sides</Nav.Link>
                <Nav.Link href="#drinks" className="text-light">Drinks</Nav.Link>
                <Nav.Link href="#combos" className="text-light">Combos</Nav.Link>
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
      <section className={styles.summary}>{showCard(nav)}</section>
    </>
  );
};

export default Header;
