import React from 'react';
import { Fragment, useEffect, useState } from "react";
import "./ProductStyling/Product.css";
import NavBar from "../HomeComponents/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import smallImage1 from "../assets/images/images/demos/download.png" 
import smallImage2 from "../assets/images/images/demos/P_setting_xxx_0_90_end_2000.png" 
import smallImage3 from "../assets/images/images/demos/UZVzoQ4upz9E5Af8_setting_xxx_0_90_end_2000.png" 

import relatedProductImage1 from "../assets/images/images/demos/download.png"
import relatedProductImage2 from "../assets/images/images/demos/P_setting_xxx_0_90_end_2000.png"
import relatedProductImage3 from "../assets/images/images/demos/UZVzoQ4upz9E5Af8_setting_xxx_0_90_end_2000.png"
import relatedProductImage4 from "../assets/images/images/demos/download.png"



const Product = () => {
  const [inputValue, setInputValue] = useState(1);
  // const [productStatus, setProductStatus] = useState("");
  const popularProducts = useSelector((state) => state.products.products);
  const recommendedProducts = useSelector( (state) => state.recommendedProducts.products );
  const status = useSelector((state) => state.productsStatus.productStatus);
  // setProductStatus(status);
  let id,product;
 const productId = useSelector((state) => state.products.id);
 const recommendedProductId = useSelector((state) => state.recommendedProducts.id);
 const [informationsState,setInformationsState]=useState(true)
  const [bigImage,setBigImage] = useState("");
  const [sbigImage,setSbigImage] = useState("../assets/images/Asus-Zenbook-pro-Series.jpg");
  const [SmallImage,setSmallImage] = useState("");

  
    if (status == "all") {
      id=productId
      product = popularProducts.find((product) => product.id == id);
    } else if (status == "recommended") {
      id = recommendedProductId
      product = recommendedProducts.find((product) => product.id == id);
    }


    useEffect(() => {
      setBigImage(product.image)
    },[])
    



  // let id = useSelector((state) => state.products.id);
  //  id = useSelector((state) => state.recommended.id);
  // product = popularProducts.find((product) => product.id == id);
  // product = recommendedProducts.find((product) => product.id == id);
  const params = useParams();
  if (params.ids) {
    id = params.ids;
  }



  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = {
      id: product.id,
      productName: product.name,
      productSrc: product.image,
      productPrice: product.price.currentPrice,
      amount: inputValue,
    };
    dispatch(cartActions.addToCart(cartItem));
    dispatch(cartActions.cartIsEmpty());
  };

  const inputChangeHandler = (event) => {
    let value = event.target.value;
    setInputValue(value);
  };
  const onAddHandler = (event) => {
    event.preventDefault();
    setInputValue((prev) => {
      return (prev = prev + 1);
    });

  };
  const onSubtractHandler = (event) => {
    event.preventDefault();
    setInputValue((prev) => {
      return (prev = prev - 1);
    });
  };


  const descriptionClickHandler = () => {
    setInformationsState(true)
  }

  const reviewsClickHandler = () => {
    setInformationsState(false)
  }
  const firstSmallImage = () => {
    setBigImage(product.image)
  }
  const secondSmallImage = () => {
    setBigImage(smallImage1)
  }
  const thirdSmallImage = () => {
    setBigImage(smallImage2)
  }
  const fourthSmallImage = () => {
    setBigImage(smallImage3)
  }
const review = "Curabitur dui nibh, vestibulum nec orci in, mattis vehicula eros. Vestibulum eu ullamcorper metus. In laoreet ex dolor, at malesuada arcu pellentesque in. Praesent lobortis vitae dolor at dapibus. Vivamus non erat commodo, dapibus eros id, convallis lectus. Cras vitae leo est. Mauris ac posuere arcu, eget pharetra orci. Cras at eros non ligula sodales pharetra. Aliquam eget volutpat lectus. Nullam nec tellus eget libero commodo volutpat vitae non mauris. Morbi malesuada a felis sed ornare. Aenean dapibus eros et nibh aliquet tristique. Aenean dignissim odio eu velit dapibus, sed sollicitudin eros posuere. Duis ullamcorper, sem ac convallis interdum, orci nisi mattis purus, viverra condimentum orci elit eu magna. Quisque eget maximus metus. Duis felis nibh, feugiat vitae eros ut, pellentesque finibus lacus.Morbi ligula ex, convallis a leo in, dictum molestie erat. Mauris fermentum vehicula sagittis. Aliquam eget faucibus mi. In placerat purus ut tortor pretium egestas. Fusce a tortor semper, posuere felis et, eleifend nisi. In varius elit dapibus ipsum dapibus finibus. Donec maximus sapien ut arcu ultricies, non facilisis lorem molestie. Aenean fringilla odio et feugiat tristique. Nullam hendrerit ultrices leo, vitae finibus felis pulvinar vel. Sed viverra, neque at tristique venenatis, velit ligula sollicitudin risus, quis dignissim nulla purus scelerisque ante. Donec iaculis ornare justo a fringilla.Cras dolor nisl, dictum eget aliquam ut, hendrerit et dui. Vivamus sapien arcu, placerat vitae magna sit amet, efficitur scelerisque elit. Donec eleifend a metus eget convallis. Vestibulum in accumsan ligula. Nullam a dolor in eros dapibus luctus. Duis ornare porttitor erat, vitae ultrices leo faucibus nec. Phasellus ac hendrerit orci, quis congue est. Sed lectus tortor, commodo id risus sit amet, pretium fermentum neque. Duis efficitur velit pretium purus consectetur consectetur.Nunc lorem sem, sollicitudin ac porttitor eu, accumsan quis diam. Phasellus porta lacus nec vestibulum vehicula. Nullam commodo feugiat est, ut semper tellus lobortis sit amet. Quisque neque leo, tristique sed tempor ac, condimentum aliquam justo. Pellentesque dictum congue dictum. Phasellus auctor malesuada nulla, suscipit pharetra magna imperdiet sed. In ex justo, auctor at dignissim ac, bibendum eu erat. In nunc mauris, placerat a tincidunt eu, consequat sed enim. Aliquam nec nunc vitae ligula vulputate suscipit. Pellentesque fermentum tincidunt urna non interdum."
// const imageteee = "../assets/images/Asus-Zenbook-pro-Series.jpg"
  return (
    <Fragment>
      <div className="pgrid">
        <div className="navtest">
          {/* <NavBar /> */}
        </div>

        <div className="images">
          <div>
            <img className="big-image" src={bigImage} alt="" />
          </div>
          <div className="small">
        
                
                
                
            {/* <img src={theimage} alt="dd"/> */}
            <img
            onClick={firstSmallImage}
              className="small-image small-image4"
              // src={require(imageteee)}
              src={product.image} alt=""
              // src="../assets/images/images/RogNice.jpg" alt=""
              // src="../images/demos/UZVzoQ4upz9E5Af8_setting_xxx_0_90_end_2000.png" alt=""
            />
            <img
            onClick={secondSmallImage}
            className="small-image small-image2"
              src={smallImage1} alt=""
            />
            <img
            onClick={thirdSmallImage}
            className="small-image small-image3"
              src={smallImage2} alt=""
            />
               <img
            onClick={fourthSmallImage}
            className="small-image small-image4"
              src={smallImage3} alt=""
            />
              {/* <img
                className="small-image small-image1"
                src="../images/demos/NicePng_bastion-png_5504663.png" alt=""
              /> */}
          </div>
        </div>

        <div className="details">
          <div>{product.name}</div>
          <div className="details_price">
            <span>{product.price.currentPrice}$</span>
            <span>{product.price.currentPrice-50}$</span>
          </div>
          <div className="details_description">{product.definition}</div>
          <div className="details_available"></div>
          <div>Availiabe Colors :</div>
          <div className="details_available_color">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* <div className="details_available_size">
            <span>{product.sizes.first}</span>
            <span>{product.sizes.second}</span>
            <span>{product.sizes.third}</span>
            <span>{product.sizes.fourth}</span>
            <span>{product.sizes.fifth}</span>
          </div> */}
          <div className="details_cart">
            <button onClick={addToCartHandler}>Add To Cart</button>
            <button>Love</button>
            <button>Edit</button>
            <form className="amount-form">
              <input
                onChange={inputChangeHandler}
                id="amount"
                type="numric"
                min="1"
                max="5"
                step="1"
                value={inputValue}
              />
              <button onClick={onAddHandler}>+</button>
              <button onClick={onSubtractHandler}>-</button>
            </form>
          </div>

          <div className="details_subdetails">
            <div>
              Catagory : <span>{product.catagory}</span>
            </div>
            <div>
              Avalability : <span>{product.availability}</span> Products in the
              stock
            </div>
          </div>
        </div>

        <div className="description">
          <div>
            <span onClick={descriptionClickHandler}>Description</span>
            <span onClick={reviewsClickHandler}>Reviews</span>
          </div>

          { informationsState && <div className="description_text">{product.description}</div>}
          { !informationsState && <div className="description_text">{review}</div>}
        </div>

        <ul className="features_area">
          {" "}
          <span className="features"> Product Features: </span>
          <li>
            <i className="fa-regular fa-check"></i>
            {product.features.one}
          </li>
          <li>
            <i className="fa-regular fa-check"></i>
            {product.features.two}
          </li>
          <li>
            <i className="fa-regular fa-check"></i>
            {product.features.three}
          </li>
          <li>
            <i className="fa-regular fa-check"></i>
            {product.features.four}
          </li>
        </ul>

        <div className="related-products">
          {" "}
          <span>Related Products</span>
          <div className="related-products_images">
           
            <div className="related-products_images_container">
              <img
                className="small-image-related small-image3"
                src={relatedProductImage1}
                alt=""
              />
              <div>Product 2</div>
            </div>

            <div className="related-products_images_container">
              <img
                className="small-image-related small-image3"
                src={relatedProductImage2}
                alt=""
              />
              <div>Product 3</div>
            </div>
           
            <div className="related-products_images_container">
              <img
                id="test"
                className="small-image-related1 small-image1"
                src={relatedProductImage3}
                alt=""
              />
              <div>Product 4</div>
            </div>
            <div className="related-products_images_container">
              <img
                className="small-image-related small-image3"
                src={relatedProductImage4}
                alt=""
              />
              <div>Product 2</div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
