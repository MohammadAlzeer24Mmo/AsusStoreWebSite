import React from 'react';
import { Fragment, useState } from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import ReactDOM from "react-dom"
const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const [renderCart, setRenderCart] = useState(false);
 
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartIsEmpty = useSelector((state) => state.cart.cartIsEmpty);

  const sumPrice = cart.reduce((accumulator, object) => {
    return accumulator + object.productPrice * object.amount;
  }, 0);

  let cartt = cart[0];

  const bla = [1, 2, 3];

  const closeCartHandler = () => {
    props.onCloseCart(false)
    // props.onCloseCart(false);
  };

  return (
    //productName prodcut price // amount // totalprice
    <Fragment>
      <div className="cartt">
      <div className="reason">
      <ul className="new">
                {/* <li>image</li> */}
                <li>Product</li>
                <li>Price</li>
                <li>Amount</li>
                <li>Final Price</li>
              </ul>
        {cart.map((product) => (
          <div key={product.id}  className="goodgrid">
            <div className="forg">
          

              <ul className="shopping-items">
                {/* <img src="./images/Asus-VivoBook-x556UQ.jpg" className="cartitemsimage"/> */}
                <img src={product.productSrc} className="cartitemsimage"/>
                <li className="name">{product.productName} </li>
                <li>{product.productPrice}</li>
                <li>{product.amount}</li>
                <li>{product.amount * product.productPrice}$</li>
              </ul>
              </div>
            
            <div className="button-area">
              <Button id={product.id} amount={product.amount}></Button>
            </div>
           <div className="lineitem"></div>
          </div>
        ))}
         <div className="close">
              <button onClick={closeCartHandler}>Close</button>
            </div>
        {/* reason */} </div>
           


        <div className="gridtwo">
             <div className="coupon">
              <h3>COUPON</h3>
              <p>Enter your coupon code if you have one :</p>
              <input type="text" placeholder="Coupon Code"/>
              <button>APPLY COUPON</button>
             </div>
            <div className="total">  
            <h3>Total</h3>
            <div>
            <div><p>sub Total</p><span>{sumPrice}$</span></div> 
            <div><p>shipping</p><span>150$</span></div> 
            <div><p>Total</p><span>{sumPrice + 150 }$</span></div> 
            </div>
            
            </div>
        
        </div>
      </div>
      {/* <div className="cartt">{!cartIsEmpty && products}</div> */}
    </Fragment>
  );
};

const CartModel = (props) =>{

  return(
    <Fragment>
      {ReactDOM.createPortal(<Cart onCloseCart={props.onCloseCart}/> ,document.getElementById('cart-root'))}
    </Fragment>
  )
}
export default CartModel;
