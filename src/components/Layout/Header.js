import { useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Container, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
import MainCard from "./MainCard/MainCard";
import HomeTab from "./MainCard/HomeTab";
import AboutTab from "./MainCard/AboutTab";
import CouponsTab from "./MainCard/CouponsTab";
import FAQTab from "./MainCard/FAQTab";
import styles from "./MainCard/MainCard.module.css";

const Header = (props) => {
  const [nav, setNav] = useState("home");
  const handleSetNav = (value) => {
    setNav(value);
  };

  const showCard = (value) => {
    switch (value) {
      case "home":
        return <HomeTab />;
      case "about":
        return <AboutTab />;
      case "coupons":
        return <CouponsTab />;
      case "faq":
        return <FAQTab />;
      default:
        <HomeTab />;
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1> Trax Mobile </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes.second}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="mx-auto">
              <Stack direction="horizontal" gap={5}>
                <Nav.Link href="#entrees">Entrees</Nav.Link>
                <Nav.Link href="#sides">Sides</Nav.Link>
                <Nav.Link href="#drinks">Drinks</Nav.Link>
                <Nav.Link href="#combos">Combos</Nav.Link>
                <NavDropdown title="More">
                  <NavDropdown.Item onClick={() => handleSetNav("home")}>
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSetNav("about")}>
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSetNav("coupons")}>
                    Coupons
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleSetNav("faq")}>
                    FAQ
                  </NavDropdown.Item>
                </NavDropdown>
              </Stack>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food served at Brockport" />
      </div>

      <section className={styles.summary}>{showCard(nav)}</section>
    </>
  );
};

export default Header;
