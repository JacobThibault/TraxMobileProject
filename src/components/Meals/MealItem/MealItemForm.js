import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    //prevent reloading of page
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //convert string to integer
    const enteredAmountNumber = +enteredAmount;

    //check if valid


    props.onAddToCart(enteredAmountNumber);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
