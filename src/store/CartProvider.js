import {useEffect, useReducer, useState} from "react";

import CartContext from "./cart-conetxt";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    };
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type:'REMOVE', id: id});
    };

    const[cartContext, setCartContext] = useState()

    useEffect(()=> {
        if(!cartContext && cartState.items.length > 0 ){
            setCartContext({
                items: cartState.items,
                totalAmount: cartState.totalAmount,
                addItem: addItemToCartHandler,
                removeItem: removeItemFromCartHandler

            })
            console.log('cartState===============',cartState,'cartContext===============', cartContext)

        }


    },[cartContext, cartState])


    return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )};

export default CartProvider;