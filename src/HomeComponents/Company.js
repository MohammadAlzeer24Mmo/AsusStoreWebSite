import React from "react";
import { memo, Fragment, useEffect, useRef } from "react";
import "./CompanyStyling/Company.css";
import { productsActions } from "../store/products-slice";
import { Link, useLocation } from "react-router-dom";
import { productsStatusActions } from "../store/productStatus-slice";
import { useDispatch } from "react-redux";

import video1 from "../assets/videos/Mechanized endurance. Battlefield brilliance. - 2022 ASUS TUF Gaming F15~2.mp4";
import video2 from "../assets/videos/ASUS ZenBook Pro Duo - The laptop of tomorrow - ASUS~1.mp4";

import image from "../assets/images/Asus-Zenbook-pro-Series.jpg";
import image2 from "../assets/images/images/Adverts/ROG.jpg";
// let h = [true, false];
function swapElements(arr) {
//   let temp = arr[0];
//   arr[0] = arr[1];
//   arr[1] = temp;
}

const Company = () => {
  let location = useLocation();
  let imageRef = useRef("");
  let igo = image;
  // const checkFirstRender = useRef(false);
  // checkFirstRender.current = location.pathname ;
  // let firstRender = checkFirstRender === location.pathname ? true:false;

  // useEffect(() => {
  //   // if(checkFirstRender.current === '/'){
  //   let some;
  //   some = setInterval(() => {
  //     if (h[1] === true) {
  //       imageRef.current.src = image;
  //     }

  //     if (h[0] === true) {
  //       imageRef.current.src = image2;
  //     }
  //     swapElements(h);
  //   }, "7900");
  //   return () => {
  //     clearInterval(some);
  //   };
  //   // }
  // }, [location.pathname]);

  const dispatch = useDispatch();
  const adsClickHandler = (event) => {
    dispatch(productsStatusActions.toggle("all"));
    dispatch(productsActions.setId(event));
  };

  return (
    <Fragment>
      <div className="company">
        {location.pathname === "/" ? (
          <Link
            to={`/recommended-product/${1}`}
            onClick={() => adsClickHandler("1p")}
          >
            <video width="280" muted autoPlay loop>
              <source
                // src="./videos/Mechanized endurance. Battlefield brilliance. - 2022 ASUS TUF Gaming F15.mp4"
                src={video1}
                type="video/mp4"
              />
            </video>
          </Link>
        ) : (
          ""
        )}

        {location.pathname === "/" ? (
          <div className="company_image animated_image">
            <img src={igo} ref={imageRef} alt="" />
          </div>
        ) : (
          ""
        )}
        {/* {location.pathname === '/' ? <Link to={`/product/${10}p`} onClick={() => adsClickHandler(10)}> */}
        {location.pathname === "/" ? (
          <Link
            to={`/recommended-product/${10}`}
            onClick={() => adsClickHandler("10p")}
          >
            <video className="tobe" width="280" autoPlay muted loop>
              <source src={video2} type="video/mp4" />
            </video>
          </Link>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default memo(Company);
