import {useContext} from "react";

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../store/cart-conetxt";
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Karta juaj</span>
    <span className={classes.badge}>
        {numberOfCartItems}
    </span>
    </button>
};

export default HeaderCardButton