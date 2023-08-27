import React from 'react';
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import "./Cartbutton.css"
import Cart from "../Cart/Cart";
import CartModel from "../Cart/Cart";
const CartButton = () => {
    const cart = useSelector(state => state.cart.cart);
    const [ showCart , setShowCart] = useState(false)
    let counter = 0;
    const items = cart.map((item => counter++))

    const toggleCartHandler = () => {
        setShowCart(!showCart)
    }

    const closeCartHandler = (data) => {
        setShowCart(data);
    }

    return(
        <Fragment>
            <button onClick={toggleCartHandler} className="cartbutton">
            <div className="cartbutton_counter"> {counter} </div>
            <div className="cartbutton_cart"> Cart </div>
            </button>
            { showCart && <CartModel onCloseCart = {closeCartHandler}/> }
            {/* <Cart test="efef" onCloseCart = {closeCartHandler}/>  */}
        </Fragment>
    )
}

export default CartButton;