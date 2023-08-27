import React from 'react';
import { Fragment } from "react";
import "./RecommendedStyling/recommended.css";
import Recommendedproduct from "./Recommendedproduct";
import { useSelector } from "react-redux";

const RecommendedProductsList = (props) => {
  const productsItems = useSelector((state) => state.recommendedProducts.products);
  const slicedProducts = [...productsItems]
  const products=slicedProducts.slice(0,12)

  const shuffleArray = items => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }
  }
  // useEffect(() => {
    shuffleArray(products)
  // },[])

  // const[hover,setHover] = useState(false) slide hover
  // const stopHover= () =>{ slide hover
  //   setHover(true) slide hover
  // }

  return (
    <Fragment>
      <div className="recommended ">
        {/* <h2>Recommended</h2> */}
         <div className="recommended_images scroller" /*onMouseEnter={stopHover} slide hover */>
          {products.map((product) => (
            <Recommendedproduct 
            key={product.id}
            id={product.id}
            src={product.image}
            name={product.name}
            definition={product.definition}
            shortDescription={product.shortdescription}
            price={product.price.currentPrice}
            toggle={props.toggle}
            // hoverState={hover} slide hover
            // key={image.id}
            // src={image.image}
            // text={image.text}
            />
          ))}
        </div>
      </div>
      <span className="recommended-line"></span>
    </Fragment>
  );
};

export default RecommendedProductsList;
