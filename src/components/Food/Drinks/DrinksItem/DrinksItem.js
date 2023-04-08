import classes from "../../Food.module.css";
import {useContext} from "react";
import DrinksItemForm from "./DrinksItemForm/DrinksItemForm";
import CartContext from "../../../../Store/cart-context";

const DrinksItem = (props) =>{
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };


    return (
        <li className={classes.food} key={props.name}>
            <div>
                <h3>{props.name} </h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <DrinksItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>

    );
};

export default DrinksItem;