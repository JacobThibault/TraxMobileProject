import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import soda from './soda.jpg';

import Card from "../../../UI/Card/Card";
import classes from "../../../Food/Food.module.css";
import AvailableDrinks from '../../../Food/Drinks/AvailableDrinks/AvailableDrinks';
import AvailableDrinksEntrance from '../../../Food/Drinks/AvailableDrinks/AvailableDrinksEntrance';

const DrinksCarousel = () => {
  //manage carousel windows
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //show carousel model
  const [drinkIsShown, setDrinkIsShown] = useState(false);
  const handleDrinkHandler = () => {
    setDrinkIsShown(!drinkIsShown);
  };


  //carousel data
  const data = [
    {
      image: soda,
      description: "Dr Pepper",
    },
    {
      image: soda,
      description: "Coke",
    },
    {
      image: soda,
      description: "Mountain Dew",
    },
    {
      image: soda,
      description: "Pepsi",
    },
  ];

  return (
    <>
      <section className={classes.entrees}>
        <Card>
        <h1 className={classes.title}>Drinks</h1>
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
                    
                    <AvailableDrinksEntrance
                      onShowEntree={handleDrinkHandler}
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
      {drinkIsShown && <AvailableDrinks onClose={handleDrinkHandler} />}
    </>
   
  );
};

export default DrinksCarousel;
