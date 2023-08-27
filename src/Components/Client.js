import React from 'react';
import { Fragment } from "react";
import "./client.css"

// import FaQuoteLeft from "react-icons/fa"
// import BiSolidQuoteLeft from "react-icons/bi"
import { ReactComponent as Quote} from"./quote-left-icon.svg"
const Client = (props) => {


    return(
        <Fragment>
            {/* <div className="clients"> */}
            <div className="clients_description">
                {/* <i className="fa fa-quote-left"></i> */}
                <Quote/>
                {/* <BiSolidQuoteLeft/> */}
                {/* <FaQuoteLeft/> */}
                <div>{props.comment}</div>
                </div>
            <div className="clients_container">
            <div className="clients_detail">
              <div>  <img src={props.src}/></div>
                <span>{props.name}</span>
                <span>{props.job}</span>
            </div>
        </div>
        {/* </div> */}
        </Fragment>
    )
}

export default Client;