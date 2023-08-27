import React from 'react';
import { Fragment } from "react";
import "./MoreStyling/Morelist.css";
import Moreproducts from "./MoreProducts";
import { useSelector } from "react-redux";

import advertImage1 from "../assets/images/images/Adverts/Asus-Portable-Monitor-Foldable.jfif" 
import advertImage2 from "../assets/images/images/Adverts/ASUS-OLED.jfif"
import advertImage3 from "../assets/images/images/Adverts/ROG.jpg"
import advertImage4 from "../assets/images/images/Adverts/Zenbook.jfif"



const More = () => {
  const productsItems = useSelector(
    (state) => state.recommendedProducts.products
  );
  const products = productsItems.slice(-3);
  let listofproducts = products.map((product) => (
    <Moreproducts
      id={product.id}
      key={product.id.toString()}
      src={product.image}
      name={product.name}
      tags={product.tags}
      price={product.price.currentPrice}
    />
  ));

  return (
    <Fragment>
      <div className="more">
        <h2>New Products</h2>
        <div>
          <div className="more-none">
            <img src={advertImage1} alt="1111ddd"/>
            <img src={advertImage2} />
          </div>

          <div className="more_productsList">{listofproducts}</div>

          <div className="more-none toend">
            <img src={advertImage3} />
            <img src={advertImage4} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default More;
