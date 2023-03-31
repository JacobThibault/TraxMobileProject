import classes from './SidesItem.module.css'
import {useContext} from "react";
import SidesItemForm from "./SidesItemForm/SidesItemForm";
import CartContext from "../../../../store/cart-context";

const SidesItem = (props) =>{
    const cartCtx = useContext(CartContext)
    const price = props.price;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };


    return (
        <li className={classes.side}>
            <div>
                <h3>{props.name} </h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <SidesItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>

    );
};

export default SidesItem;