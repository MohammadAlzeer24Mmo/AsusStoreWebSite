import React from 'react';
import "./about-products.css"
import { Fragment } from "react";


const AboutProducts = (props) => {

    return(
        <Fragment>
            <div className="about-products">
                <div className="about-products_image"><img src={props.src} alt="this is photo"/></div>
                {/* <div className="about-products_title"><BsCurrencyDollar/><h3>{props.title}</h3></div> */}
                <div className="about-products_title"><props.i/><h3>{props.title}</h3></div>
                <div className="about-products_text">lorem some trxt lero lorem some trxt lero lorem some trxt lero lorem some trxt lero some trxt lero</div>
                <div className="about-products_button">Read More</div>
            </div>
        </Fragment>
    )
}

export default AboutProducts;
