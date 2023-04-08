import classes from "../../Food.module.css";
import Card from "../../../UI/Card/Card";
import SidesItem from "../SidesItem/SidesItem";
import { useEffect, useState } from "react";

const AvailableSides = () => {
  const [retrievedSideList, setRetrievedSideList] = useState([]);

  useEffect(() => {
    const fetchSides = async () => {
      const response = await fetch(
        "https://foodapp-a3f77-default-rtdb.firebaseio.com/Sides.json"
      );
      const responseData = await response.json();

      const loadedSides = [];

      for (const key in responseData) {
        loadedSides.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          key: key,
        });
      }
      setRetrievedSideList(loadedSides);
    };
    fetchSides();
  }, []);

  const sideList = retrievedSideList.map((side) => (
    <SidesItem
      id={side.id}
      key={side.id}
      name={side.name}
      description={side.description}
      price={side.price}
    />
  ));
  return (
    <div className={classes.menu}>
      <section>
        <Card>
          <ul>{sideList}</ul>
        </Card>
      </section>
    </div>
  );
};
export default AvailableSides;
