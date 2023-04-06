import { Pagination, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const CardPagination = (props) => {
  const [nav, setNav] = useState("Home");
  const handleSetNav = (value) => {
    props.navSet(value);
    setNav(value);
  };

  return (
    <Container
      className="d-flex justify-content-center mx-auto"
      style={{ position: "absolute", bottom: "1rem"}}
    >
      <Pagination size="sm">
        {/*handle where to go with back button */}
        <Pagination.Prev
          onClick={() => {
            if (props.nav === "Home") {
              handleSetNav("FAQ");
            } else if (props.nav === "About") {
              handleSetNav("Home");
            } else if (props.nav === "Coupons") {
              handleSetNav("About");
            } else if (props.nav === "FAQ") {
              handleSetNav("Coupons");
            }
          }}
        />
        <Pagination.Item 
          active={nav === "Home" ? true : false}
          onClick={() => handleSetNav("Home")}
        >
          {"Home"}
        </Pagination.Item>
        <Pagination.Item
          active={nav === "About" ? true : false}
          onClick={() => handleSetNav("About")}
        >
          {"About"}
        </Pagination.Item>
        <Pagination.Item
          active={nav === "Coupons" ? true : false}
          onClick={() => handleSetNav("Coupons")}
        >
          {"Coupons"}
        </Pagination.Item>
        <Pagination.Item
          active={nav === "FAQ" ? true : false}
          onClick={() => handleSetNav("FAQ")}
        >
          {"FAQ"}
        </Pagination.Item>
        {/*handle where to go with next button */}
        <Pagination.Next
          onClick={() => {
            if (props.nav === "Home") {
              handleSetNav("About");
            } else if (props.nav === "About") {
              handleSetNav("Coupons");
            } else if (props.nav === "Coupons") {
              handleSetNav("FAQ");
            } else if (props.nav === "FAQ") {
              handleSetNav("Home");
            }
          }}
        />
      </Pagination>
    </Container>
  );
};

export default CardPagination;
