import React from 'react';
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./FooterStyling/Footer.css";

import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import { AiOutlineTwitter } from "react-icons/ai"
import { FiInstagram } from "react-icons/fi"


const Footer = () => {
  const [ layouts , setLayouts] = useState(true)
  let location = useLocation();


    
  const latestProducts = useSelector(
    (state) => state.recommendedProducts.products
  );
    const slicedLatestProducts = latestProducts.slice(1,5) 

   
  if (location.pathname === "/signup"){
    return;}
    
  return (
    <Fragment>
      <div className="footer-container">
        <div className="footer_about-us">
          <h3 className="footer_about-us_title">About Us</h3>
          <div className="footer_about-us_text">
            Lorem ipsum dolor sit amet elit.Lorem ipsum dolor sit amet
            elit.Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum
            nec
          </div>
          <span className="footer_main-social">
          <AiOutlineTwitter/>
          <BiLogoFacebook/>
          <FiInstagram/>
          <BiLogoLinkedin/>
            {/* <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i> */}
          </span>
        </div>
        <div className="footer_getintouch">
          <h3 className="footer_getintouch_title">Get In Touch</h3>
          <ul>
            <li>123 Street, New York, USA</li>
            <li>+012 345 67890</li>
            <li>info@example.com</li>
            <li>Mon - Fri, 9AM - 10PM</li>
          </ul>
        </div>
        <div className="footer_products">
          <div className="footer_products_title">Our Products</div>
          <ul>
            <li>Laptops</li>
            <li>Mouses</li>
            <li>Keyboards</li>
            <li>Backpacks</li>
            <li>Graphic Cards</li>
            <li>Laptops</li>
            <li>Mouses</li>
            <li>Keyboards</li>
            <li>Backpacks</li>
          </ul>
        </div>
        <div className="footer_latest-products">
          <div className="footer_latest-products_title">Latest Products</div>
          <ul className="footer_latest-products_list">
          {slicedLatestProducts.map((product) => (
            
              <li key={Math.random()}>
                {" "}
                <img src={`../.${product.image}`} />
              </li>
              
          ))}
            </ul>
            </div>
        <div className="footer_rights">
          <div>Mohammead Alzeer</div>
          <div>&copy; All Rights Reserved</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
