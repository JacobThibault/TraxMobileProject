import { Pagination, Container } from "react-bootstrap";

const CardPagination = (props) => {
  const handleSetNav = (value) => {
    props.navSet(value);
  };

  return (
    <Container
      className="d-flex justify-content-center"
      style={{ position: "absolute", bottom: "1rem" }}
    >
        <Pagination size="sm">
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
          <Pagination.Item onClick={() => handleSetNav("Home")}>
            {"Home"}
          </Pagination.Item>
          <Pagination.Item onClick={() => handleSetNav("About")}>
            {"About"}
          </Pagination.Item>
          <Pagination.Item onClick={() => handleSetNav("Coupons")}>
            {"Coupons"}
          </Pagination.Item>
          <Pagination.Item onClick={() => handleSetNav("FAQ")}>
            {"FAQ"}
          </Pagination.Item>
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
