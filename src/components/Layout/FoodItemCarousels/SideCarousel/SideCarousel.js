import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import tatertots from './SidesCarouselPictures/tatertots.jpg';
import curlyfries from './SidesCarouselPictures/curlyfries.webp';
import onionrings from './SidesCarouselPictures/onionrings.jpg';
import fries from './SidesCarouselPictures/fries.webp';

import Card from "../../../UI/Card/Card";
import classes from "../../../Food/Food.module.css";
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
      image: fries,
      description: "Fries",
      key: "0"
    },
    {
      image: onionrings,
      description: "Onion Rings",
      key: "1"
    },
    {
      image: curlyfries,
      description: "Curly Fries",
      key: "2"
    },
    {
      image: tatertots,
      description: "Tater Tots",
      key: "3"
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
                    key={slide.key}
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
