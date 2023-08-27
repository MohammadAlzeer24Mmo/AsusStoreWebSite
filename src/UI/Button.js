import React from 'react';
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Button.css"

const Button = (props) => {
  const dispatch = useDispatch();
  const changeAmount = {
    id: props.id,
    amount: props.amount
  };
  let operator;
  const addAmountHandler = () => {
    changeAmount.operator = "+";
    dispatch(cartActions.changeAmountHandler(changeAmount));
  };

  const subtractAmountHandler = () => {
    changeAmount.operator = "-";
    dispatch(cartActions.changeAmountHandler(changeAmount, operator));
  };
  const removeItemHandler = () => {
    const id = props.id;
    console.log("pro" + id);

    dispatch(cartActions.removeItemHandler(id));
  };

  return (
    <Fragment>
      <div className="cart-buttons">
        <button onClick={addAmountHandler}> + Add</button>
        <button onClick={subtractAmountHandler}> - Subtract</button>
        <button onClick={removeItemHandler}> remove </button>
      </div>
    </Fragment>
  );
};

export default Button;
