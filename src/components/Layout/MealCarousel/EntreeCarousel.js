import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import burger from "./burger.jpg";
import pizza from "./pizza.webp";
import fries from "./fries.webp";
import Card from "../../UI/Card/Card";
import classes from "../../Food/Entrees/AvailableEntrees/AvailableEntrees.module.css";
import AvailableEntreesEntrance from "../../Food/Entrees/AvailableEntrees/AvailableEntreesEntrance";
import AvailableEntrees from "../../Food/Entrees/AvailableEntrees/AvailableEntrees";

const EntreeCarousel = () => {
  //manage carousel windows
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //show carousel model
  const [entreesIsShown, setEntreesIsShown] = useState(false);
  const handleEntreesHandler = () => {
    setEntreesIsShown(!entreesIsShown);
  };
  /*
    const hideEntreesHandler = () => {
      setEntreesIsShown(false);
    };
*/

  //carousel data
  const data = [
    {
      image: burger,
      caption: "Chicken Sandwich",
      description: (
        <AvailableEntreesEntrance onShowEntree={handleEntreesHandler} />
      ),
    },
    {
      image: burger,
      caption: "Cheese Burger",
      description: (
        <AvailableEntreesEntrance onShowEntree={handleEntreesHandler} />
      ),
    },
    {
      image: fries,
      caption: "Five Hand breaded Chicken Fingers",
      description: (
          <AvailableEntreesEntrance onShowEntree={handleEntreesHandler} />
      ),
    },
    {
      image: pizza,
      caption: "Chicken Quesadilla",
      description: (
        <AvailableEntreesEntrance onShowEntree={handleEntreesHandler} />
      ),
    },
  ];

  return (
    <>
      <section className={classes.entrees}>
        <Card>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.caption}
                    height="650px"
                    width="auto"
                  />
                  <Carousel.Caption>
                    <h3>{slide.caption}</h3>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card>
      </section>
      {entreesIsShown && <AvailableEntrees onClose={handleEntreesHandler} />}
    </>
  );
};

export default EntreeCarousel;
