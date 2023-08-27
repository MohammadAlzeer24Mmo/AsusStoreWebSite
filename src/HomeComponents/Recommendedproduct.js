import React from 'react';
import { Fragment } from "react";
import "./RecommendedimageStyling/Recommendedimage.css";
import { recommendedProductsActions } from "../store/recommendedProducts-slice";
import { productsStatusActions } from "../store/productStatus-slice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Recommendedproduct = (props) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const descriptionClickHandler = () => {
     dispatch(productsStatusActions.toggle("recommended"))
    dispatch(recommendedProductsActions.setId(props.id));
  };

const productNavigate = () => {
  dispatch(productsStatusActions.toggle("recommended"))
  dispatch(recommendedProductsActions.setId(props.id));
  navigate(`/recommended-product/${props.id}`)
}
 
  return (
    <Fragment>
      <div
      className={`recommended_images_wrapper ${props.toggle ? "stop_animation" : ""}`}
      //  $ {props.hoverState ? "stop_acation" : ""}
      >
        <img src={props.src} alt="" />
        <span onClick={productNavigate}>
        <Link to={`/recommended-product/${props.id}`} onClick={descriptionClickHandler}>{props.name}</Link>
          {/* <div>{props.name}</div> */}
          <div>{props.shortDescription}</div>
          <div>{props.price}$</div>
        </span>
      </div>
    </Fragment>
  );
};

export default Recommendedproduct;
