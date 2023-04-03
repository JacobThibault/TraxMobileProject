import classes from './EntreesItem.module.css'
import {useContext} from "react";
import EntreesItemForm from "./EntreesItemForm/EntreesItemForm";
import CartContext from "../../../../Store/cart-context";

const EntreesItem = (props) =>{
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
        <li className={classes.entree}>
            <div>
                <h3>{props.name} </h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <EntreesItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>

    );
};

export default EntreesItem;