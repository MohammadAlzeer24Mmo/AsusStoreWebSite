import React from 'react';
import { Fragment, useState } from "react";
import Navbar from "../HomeComponents/Navbar";
import Company from "../HomeComponents/Company";
import RecommendedProductsList from "../HomeComponents/RecommendedProductsList";
import Popular from "../HomeComponents/productsList";
import MoreProductsList from "../HomeComponents/MoreProductsList";

// import testImage from "../assets/images/Asus-Zenbook-pro-Series.jpg"
// const tt = "../assets/images/Asus-Zenbook-pro-Series.jpg"
const Home = (props) => {

  return (
    <Fragment>
      <div className="grid">
        {/* <div className="navv"> */}
          {/* <Navbar onToggleList={toggleListHandler} /> */}
        {/* </div> */}
        {/* <div className="comp"> */}
          {/* <Company toggle={props.toggle}/> */}
          {/* <Company toggle={toggleList} /> */}
        {/* </div> */}
        <div className="recommendedd">
          {/* <div> ttttttttttttttttttttttttttttttttttttttttttttttttttt </div> */}
          {/* <img src={require(tt)}/> */}
          <RecommendedProductsList toggle={props.toggle}/>
          {/* <RecommendedProductsList toggle={toggleList} /> */}
        </div>
        <div className="popular-grid">
          <Popular />
        </div>
        <div className="more-grid">
          <MoreProductsList />
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
