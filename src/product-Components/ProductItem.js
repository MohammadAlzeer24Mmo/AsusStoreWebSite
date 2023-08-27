import React from 'react';
import "./ProductsStyling/Popularproduct.css";
import { Fragment, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/products-slice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productsStatusActions } from "../store/productStatus-slice";

const ProductItem = (props) => {
  // const [pro,setpro] = useState(false);
  // const [description,setDescription] = useState('description');
  const definition = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [readMore,setReadMore] = useState(true)
  const [on,setOn] = useState(false)
  const [animation,setAnimation] = useState("")
  const location = useLocation();
  const navigate = useNavigate();

  const productNavigate = () => {
    dispatch(productsStatusActions.toggle("all"))
    dispatch(productsActions.setId(props.id))
    dispatch(productsActions.showProduct(true))
    navigate(`/recommended-product/${props.id}`)
  }
const readMoreClickHandler=()=>{
setReadMore(false)
setAnimation("forward")
}

const showLessClickHandler=()=>{
  setReadMore(true)
  setAnimation("backward")
  // setAnimation()
}


  // const id = useSelector(state => state.ui.id)
   
  // dispatch(uiActions.setId(params.ids))

  const nameClickHandler=()=>{
  //  setpro(true);  
  // loremloremloreml oremloremlore mlor emlo remlo remlo remlor emlor emlorem lorem lore mlore mlorem loreml oremlo remlore mlor emlore mlore mloremlore mloremlorem loremloremlore mloremloremlo remloremloreml oremloremloremlo remlore mloremloremloremmloremloremloremmloremloremloremmloremloremloremmloremloremlorem
   dispatch(productsStatusActions.toggle("all"))
   dispatch(productsActions.setId(props.id))
   dispatch(productsActions.showProduct(true))
  }
  return (
    <Fragment>
      <div  className={`${location.pathname === "/" ? "container": "container2"}`}>
        <img onClick={productNavigate} className={`${location.pathname === "/" ? "popular-single-image": "popular-single-image2"} `} src={props.src} alt="" />
        <span onClick={productNavigate} className={`${location.pathname === "/" ? "popular_image_text": "popular_image_text2"} `}>
          <Link to={`/product/${props.id}`} onClick={nameClickHandler}>{props.name}</Link>
          <span>{props.price}$</span>
          <span>{props.shortdescription}</span>
        </span>
        {location.pathname === "/search" ? <div className={`product_desciption ${animation=="forward" ? "product_desciption_animation_on": ""} ${animation=="backward" ? "product_desciption_animation_off": ""}`}>{props.definition}</div> :""}
        {location.pathname === "/search" ?  (readMore ? <div className="read_more" onClick={readMoreClickHandler}> <div>read more <i className="fa-solid fa-chevrons-right"></i></div> </div> :
       <div className="read_more" onClick={showLessClickHandler}><div><i className="fa-solid fa-arrow-up"></i> show less</div></div>) : ""}
      
      </div>
      {/* { pro && <Product id={props.id} />} */}
    </Fragment>
  );
};

export default ProductItem;
