import classes from "../../Food.module.css";
import {useContext} from "react";
import CombosItemForm from "./CombosItemForm";
import CartContext from "../../../../Store/cart-context";

const CombosItem = (props) =>{
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
                <CombosItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>

    );
};

export default CombosItem;