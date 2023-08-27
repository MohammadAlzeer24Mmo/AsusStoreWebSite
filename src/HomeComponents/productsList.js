import React from 'react';
import"./PopularStyling/Popular.css"
import ProductItem from "../product-Components/ProductItem";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Popular = () => {
  const popularProducts = useSelector ((state) => state.products.products);
  const products = [...popularProducts]
  const shuffleArray = items => {

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }
  }

  shuffleArray(products)

  const sliceProducts = products.slice(1, 40);

   let list = sliceProducts.map((product) => (
           
      <ProductItem
        // popularProducts = {popularProducts}
        key={product.id}
        id={product.id}
        src={product.image}
        name={product.name}
        shortdescription={product.shortdescription}
        price={product.price.currentPrice}
      />
  ))
  return (
    <Fragment>
      <div className="popular">
        <h2>Products</h2>

        <div className="popular_image">
        {list}
        </div>
        
      </div>
    </Fragment>
  );
};

export default Popular;
