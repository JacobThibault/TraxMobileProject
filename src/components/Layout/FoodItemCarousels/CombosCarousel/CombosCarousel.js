import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import pizza from "./CombosCarouselPictures/pizza.webp";
import chickenfingers from "./CombosCarouselPictures/chickenfingers.jpeg";
import chickensanwich from "./CombosCarouselPictures/chickensanwich.jpg";
import wings from './CombosCarouselPictures/wings.jpg';

import Card from "../../../UI/Card/Card";
import classes from "../../../Food/Food.module.css";
import AvailableCombos from "../../../Food/Combos/AvailableCombos/AvailableCombos";
import AvailableCombosEntrance from "../../../Food/Combos/AvailableCombos/AvailableCombosEntrance";

const CombosCarousel = () => {
  //manage carousel windows
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //show carousel model
  const [comboIsShown, setComboIsShown] = useState(false);
  const handleCombosHandler = () => {
    setComboIsShown(!comboIsShown);
  };


  //carousel data
  const data = [
    {
      image: chickensanwich,
      description: "Chicken Sandwich Combo Meal",
      key: "0"
    },
    {
      image: chickenfingers,
      description: "Five Hand Breaded Chicken Fingers Combo Meal",
      key: "1"
    },
    {
      image: pizza,
      description: "Oven Cooked Pizza",
      key: "2"
    },
    {
      image: wings,
      description: "Dozen Fried Hot Wings",
      key: "3"
    },
  ];

  return (
    <>
      <section className={classes.entrees}>
        <Card>
        <h1 className={classes.title}>Combos</h1>
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
                    
                  <AvailableCombosEntrance
                      onShowEntree={handleCombosHandler}
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
      {comboIsShown && <AvailableCombos onClose={handleCombosHandler} />}
    </>
   
  );
};

export default CombosCarousel;
