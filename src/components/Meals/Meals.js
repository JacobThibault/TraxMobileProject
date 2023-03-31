import MainCard from '../Layout/MainCard/MainCard';
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MainCard/>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
