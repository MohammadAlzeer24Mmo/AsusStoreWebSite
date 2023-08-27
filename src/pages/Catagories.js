import React from 'react';
import ProductItem from "../product-Components/ProductItem.js";
import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CatagoriesStyling/Catagories.css";
import NavBar from "../HomeComponents/Navbar.js";
import Search from "../UI/Search.js";
import PriceRange from "../UI/PriceRange.js";
import { useLocation } from "react-router-dom";
const Catagories = () => {
  const [options, setOptions] = useState({min: 0,
    max: 10000,
    checked: {
      laptop: "Laptop",
      screen: "Screen",
      mouse: "Mouse",
      keyboard: "Keyboard",
      backpack: "Backpack",
    }});
    const location = useLocation();
    const [renderLaptops, setRenderLaptops] = useState(true);
    const [renderScreens, setRenderScreens] = useState(true);
    const [renderMouses, setRenderMouses] = useState(true);
    const [renderKeyboards, setRenderKeyboards] = useState(true);
    const [renderBackpacks, setRenderBackpacks] = useState(true);
    
useEffect(()=>{
  if(options.checked.laptop === "Laptop"){
    setRenderLaptops(true)}
    else{setRenderLaptops(false)}

  if(options.checked.screen === "Screen"){
    setRenderScreens(true)}
      else{setRenderScreens(false)}

  if(options.checked.mouse === "Mouse"){
    setRenderMouses(true)}
        else{setRenderMouses(false)}

  if(options.checked.keyboard === "Keyboard"){
    setRenderKeyboards(true)}
          else{setRenderKeyboards(false)}

  if(options.checked.backpack === "Backpack"){
    setRenderBackpacks(true)}
            else{setRenderBackpacks(false)}
},[options.checked.laptop,options.checked.screen,options.checked.mouse,options.checked.keyboard,options.checked.backpack])
    


  const popularProducts = useSelector((state) => state.products.products);
  const recommendedProducts = useSelector((state) => state.recommendedProducts.products);
  const combinedProducts = [].concat(popularProducts, recommendedProducts);
  let searchwords = useSelector((state) => state.productsStatus.search);
  //test for name search
  let Laptops,screens,mouses,keyboards,backpacks;
  searchwords=searchwords.toLowerCase();




     Laptops = combinedProducts.filter(
      (product) =>
      product.catagory === options.checked.laptop &&
        +product.price.currentPrice > +options.min &&
        +product.price.currentPrice < +options.max &&
        product.name.toLowerCase().includes(searchwords) === true
    );

  screens = combinedProducts.filter(
    (product) =>
    product.catagory === options.checked.screen &&
      +product.price.currentPrice > +options.min &&
      +product.price.currentPrice < +options.max &&
      product.name.toLowerCase().includes(searchwords) === true
      );

    mouses = combinedProducts.filter(
    (product) =>
    product.catagory === options.checked.mouse &&
      +product.price.currentPrice > +options.min &&
      +product.price.currentPrice < +options.max &&
      product.name.toLowerCase().includes(searchwords) === true
  );

  keyboards = combinedProducts.filter(
    (product) =>
    product.catagory === options.checked.keyboard &&
      +product.price.currentPrice > +options.min &&
      +product.price.currentPrice < +options.max &&
      product.name.toLowerCase().includes(searchwords) === true
  );

  backpacks = combinedProducts.filter(
    (product) =>
    product.catagory === options.checked.backpack &&
      +product.price.currentPrice > +options.min &&
      +product.price.currentPrice < +options.max &&
      product.name.toLowerCase().includes(searchwords) === true
  );


  
  const ChangeSelectedSearchOptions = (selectedOptions) => {
    useEffect(() => {
      setOptions(selectedOptions);
    }, [selectedOptions]);
    return selectedOptions;
  };
  let laptopsList = Laptops.map((product) => (
    <ProductItem
      popularProducts={popularProducts}
      key={product.id}
      id={product.id}
      src={product.image}
      name={product.name}
      shortdescription={product.shortdescription}
      price={product.price.currentPrice}
      definition={product.definition}
    />
  ));

  let screensList = screens.map((product) => (
    <ProductItem
      popularProducts={popularProducts}
      key={product.id}
      id={product.id}
      src={product.image}
      name={product.name}
      shortdescription={product.shortdescription}
      price={product.price.currentPrice}
      definition={product.definition}
    />
  ));

  let mousesList = mouses.map((product) => (
    <ProductItem
      popularProducts={popularProducts}
      key={product.id}
      id={product.id}
      src={product.image}
      name={product.name}
      shortdescription={product.shortdescription}
      price={product.price.currentPrice}
      definition={product.definition}
    />
  ));

  let keyboardsList = keyboards.map((product) => (
    <ProductItem
      popularProducts={popularProducts}
      key={product.id}
      id={product.id}
      src={product.image}
      name={product.name}
      shortdescription={product.shortdescription}
      price={product.price.currentPrice}
      definition={product.definition}
    />
  ));

  let backPacksList = backpacks.map((product) => (
    <ProductItem
      popularProducts={popularProducts}
      key={product.id}
      id={product.id}
      src={product.image}
      name={product.name}
      shortdescription={product.shortdescription}
      price={product.price.currentPrice}
      definition={product.definition}
    />
  ));

  return (
    <Fragment>
      <div className="search-container">
      <div className="search-area">
      <Search onChangeSelectedSearchOptions={ChangeSelectedSearchOptions} />
      </div>

      <div className="result result2">
        {renderLaptops && <h2>Laptops</h2>}
        {renderLaptops &&  <div className={`${location.pathname === "/" ? "result_image": "result_image2"}`} >{laptopsList}</div>}

        {renderScreens && <h2>Screens</h2>}
        {renderScreens && <div className= {`${location.pathname === "/" ? "result_image": "result_image2"}`}>{screensList}</div>}

        {renderMouses && <h2>Mouses</h2> }
        {renderMouses && <div className={`${location.pathname === "/" ? "result_image": "result_image2"}`}>{mousesList}</div>}

        {renderKeyboards && <h2>Headphones</h2>}
        {renderKeyboards && <div className={`${location.pathname === "/" ? "result_image": "result_image2"}`}>{keyboardsList}</div>}

        {renderBackpacks && <h2>Backpacks</h2>}
        {renderBackpacks && <div className={`${location.pathname === "/" ? "result_image": "result_image2"}`}>{backPacksList}</div>}
      </div>
      </div>
    </Fragment>
  );
};

export default Catagories;
