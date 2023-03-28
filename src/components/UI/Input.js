import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>

    {/*spread operator ensures that all inputs are added as 
        props to input this makes it highly configurable*/}
    <input ref={ref} {...props.input} />
  </div>
  );
});

export default Input;
