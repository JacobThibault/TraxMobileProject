import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import burger from "./burger.jpg";
import chickenquesadilla from "./chickenquesadilla.jpg";
import chickenfingers from "./chickenfingers.jpeg";
import chickensanwich from "./chickensanwich.jpg";
import Card from "../../../UI/Card/Card";
import classes from "../../../Food/Styles/AvailableItems.module.css";
import AvailableSides from "../../../Food/Sides/AvailableSides/AvailableSides";
import AvailableSidesEntrance from "../../../Food/Sides/AvailableSides/AvailableSidesEntrance";

const SideCarousel = () => {
  //manage carousel windows
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //show carousel model
  const [sideIsShown, setSideIsShown] = useState(false);
  const handleSideHandler = () => {
    setSideIsShown(!sideIsShown);
  };


  //carousel data
  const data = [
    {
      image: chickensanwich,
      description: "Chicken Sandwich",
    },
    {
      image: burger,
      description: "Cheese Burger",
    },
    {
      image: chickenfingers,
      description: "Five Hand breaded Chicken Fingers",
    },
    {
      image: chickenquesadilla,
      description: "Chicken Quesadilla",
    },
  ];

  return (
    <>
      <section className={classes.entrees}>
        <Card>
        <h1 className={classes.title}>Sides</h1>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data.map((slide, i) => {
              return (
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src={slide.image}
                    alt={slide.caption}
                    fluid={true}
                    rounded={true}
                  />
                  <Carousel.Caption>
                    
                    <AvailableSidesEntrance
                      onShowEntree={handleSideHandler}
                    />
                    <h5>{slide.description}</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Card>
      </section>
      {/*launch modal */}
      {sideIsShown && <AvailableSides onClose={handleSideHandler} />}
    </>
   
  );
};

export default SideCarousel;