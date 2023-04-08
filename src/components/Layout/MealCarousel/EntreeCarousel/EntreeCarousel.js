import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import burger from "./EntreesCarouselPictures/burger.jpg";
import chickenquesadilla from "./EntreesCarouselPictures/chickenquesadilla.jpg";
import chickenfingers from "./EntreesCarouselPictures/chickenfingers.jpeg";
import chickensanwich from "./EntreesCarouselPictures/chickensanwich.jpg";
import Card from "../../../UI/Card/Card";
import classes from "../../../Food/Food.module.css";
import AvailableEntreesEntrance from "../../../Food/Entrees/AvailableEntrees/AvailableEntreesEntrance";
import AvailableEntrees from "../../../Food/Entrees/AvailableEntrees/AvailableEntrees";

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

  //carousel data
  const data = [
    {
      image: chickensanwich,
      description: "Chicken Sandwich",
      key: "0"
    },
    {
      image: burger,
      description: "Cheese Burger",
      key: "1"
    },
    {
      image: chickenfingers,
      description: "Five Hand breaded Chicken Fingers",
      key: "2"
    },
    {
      image: chickenquesadilla,
      description: "Chicken Quesadilla",
      key: "3"
    },
  ];

  return (
    <>
      <section className={classes.entrees}>
        <Card>
          <h1 className={classes.title}>Entrees</h1>
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
                    key={slide.key}
                  />
                  <Carousel.Caption>
                    <AvailableEntreesEntrance
                      onShowEntree={handleEntreesHandler}
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
      {entreesIsShown && <AvailableEntrees onClose={handleEntreesHandler} />}
    </>
  );
};

export default EntreeCarousel;
