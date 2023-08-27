import React from 'react';
import { Fragment, useEffect, useState } from "react"
import "./PriceRange.css"
const PriceRange = (props) => {

    
    const [value1,setValue1] = useState("0")
    const [value2,setValue2] = useState("2000")

    if(+value1 > +value2 || +value1 === 10000){

        setValue1(+value2-100)
    }
    
    if(value2 < 200){
        setValue2(200)
    }

    if(value1 < 0){
        setValue1(0)
    }
    
    // console.log("dvalue1",value1)
    //     console.log("dvalue2",value2)
    const value1handler = (event) =>{
        setValue1(event.target.value)
    }
    const value2handler = (event) =>{
            setValue2(event.target.value)
       
        
    }
    useEffect(()=>{
    props.minV(value1);
    props.maxV(value2);
    },[value1,value2]);

    return(
<Fragment>
<div className="wrapper">
      <header>
        <h2>Price Range</h2>
        <p>Use slider or enter min and max price</p>
      </header>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" className="input-min" onChange={value1handler} value={value1} />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" className="input-max" onChange={value2handler} value={value2} />
        </div>
      </div>
      {/* <div className="slider">
        <div className="progress"></div>
      </div> */}
      <div className="range-input">
        <input type="range" className="range-min" min="0" max="2000" onChange={value1handler}  value={value1} step="10"/>
        <input type="range" className="range-max" min="0" max="2000"  onChange={value2handler}  value={value2}  step="10"/>
      </div>
    </div>
</Fragment>

    )
}

export default PriceRange