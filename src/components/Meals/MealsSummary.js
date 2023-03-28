import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite entree or snack from our broad selection of available menu items
        and enjoy a delicious lunch or dinner on the go.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced BASC chefs!
      </p>
    </section>
  );
};

export default MealsSummary;