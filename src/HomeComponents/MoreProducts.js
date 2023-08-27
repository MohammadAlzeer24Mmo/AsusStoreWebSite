import React from 'react';
import { Fragment } from "react";
import "./MoreStyling/Moreimage.css";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { recommendedProductsActions } from "../store/recommendedProducts-slice";
import { productsStatusActions } from "../store/productStatus-slice";

const Moreproduct = (props) => {
  
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const descriptionClickHandler = () => {
     dispatch(productsStatusActions.toggle("recommended"))
    dispatch(recommendedProductsActions.setId(props.id));
    navigate(`/more-products/${props.id}`)
  };

  
  return (
    <Fragment>
      <div className="more_flex" onClick={descriptionClickHandler}>
        <img src={props.src} />
        <div className="define">
          <h3> <Link to={`/more-products/${props.id}`} onClick={descriptionClickHandler}>{props.name}</Link></h3>
          <div>
            <span>#{props.tags.tag1}</span>
            <span>#{props.tags.tag2}</span>
            <span>#{props.tags.tag3}</span>
          </div>
        </div>
        <div className="price">{props.price}$</div>
      </div>
    </Fragment>
  );
};
export default Moreproduct;
