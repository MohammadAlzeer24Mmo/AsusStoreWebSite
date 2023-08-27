import React from 'react';
import {Fragment, useEffect } from "react";
import { Link, useLocation,NavLink } from "react-router-dom";
import CartButton from "../UI/CartButton";
import'./NavbarStyling/Navbar.css';
import {productsStatusActions} from '../store/productStatus-slice'
import { useState } from "react";
import { useDispatch } from "react-redux";
import Company from "./Company";
import { MdOutlineDensityMedium } from "react-icons/md"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"




import { LuSearch } from 'react-icons/lu';
const NavBar = (props) => {

    const [searchInput , setSearchInput] = useState('')
    const [searchPlaceHolderValue,setSearchPlaceHolderValue] = useState('')
    const [navSlice,setNavSlice] = useState(true)
    const [toggleMenu , setToggleMenu] = useState(false);
    const [searchInputStatus,setSearchInputStatus] = useState(false)
    const Location = useLocation();
    const dispatch = useDispatch();

    let location = useLocation();

 

    const onSearch = (event) => {
        setSearchInput(event.target.value)
    }
    useEffect(()=>{
        if(Location.pathname === "/search"){ 
            setSearchPlaceHolderValue('Enter product name')
        }else{
            setSearchPlaceHolderValue('Go to search')
        }
    },[Location.pathname])

    useEffect(()=>{
        if(Location.pathname === "/"){
            setNavSlice(true);
        }
        else{setNavSlice(false)}
    },[navSlice,Location.pathname])

    

    useEffect(()=>{
        dispatch(productsStatusActions.searchWords(searchInput))
    },[searchInput,dispatch])

    const menuClickHandler = () =>{
        setToggleMenu(!toggleMenu)
    }
    const inputFocusHandler = () =>{
        if(searchInput.trim !== ""){
            setSearchInputStatus(true)
        }
    }
    const inputBlurHandler = () => {
        setSearchInputStatus(false)
    }
    
    if (location.pathname === "/signup"){
        return;}

    return(
        <Fragment>
        <div className={`nav ${navSlice === true ? "" : "nav-slice"}`}>
        {/* <div className={`nav ${props.background === "somecontent" ? "secondNav" : ""}`}> */}
        {/* <video width="1500" height="100px" controls muted autoPlay loop>
             <source src="./videos/Mechanized endurance. Battlefield brilliance. - 2022 ASUS TUF Gaming F15.mp4"  type="video/mp4"/>
        </video>   */}
        
     <div className="nav_second_sidebuttons">
     
                    <span onClick={menuClickHandler} ><MdOutlineDensityMedium/><button>ALL CATAGORIES</button></span>
                    {/* <span onClick={menuClickHandler} ><i className="fa-regular fa-bars"></i><button>ALL CATAGORIES</button></span> */}
                    {/* <span onClick={menuClickHandler} ><i className="fa-regular fa-bars"></i><button>ALL CATAGORIES</button></span> */}
                    
                </div> 

                <div className="carts"><CartButton/></div>
                
            <div className="nav_side-profile">
            <div className="account"><Link to="/signup">{props.account}</Link><i className="fa-light fa-user"></i></div>
          </div>
            <div className="nav_logo">logo</div>
            <div className="nav_elements">
            <ul className="elements-list">
                {/* className={(navData) => navData.isActive ? 'active' : ''} */}
                <NavLink  to="/"><li>Home</li></NavLink>
                <NavLink to="/search"><li>Search</li></NavLink>
                <NavLink to="/signup" target="_blank"><li>SignUp</li></NavLink>
                <NavLink to="/about"><li>About_Us</li></NavLink>
                <NavLink to="/developer"><li>Developer</li></NavLink>
                
            </ul>
            </div>
            <div className="nav_login"><span>Login  </span><span>  or  </span><span>  register</span> 
                <span>     |     </span><span>HotLine(0912345678)</span>
            </div>

            <div className="nav_second">
                    <Link className="nav_second_search" to="/search"> 
                    <input onFocus={inputFocusHandler} onBlur={inputBlurHandler}
                    className={`searchbar ${searchInputStatus === true ? 'input-search-status' : 'd'}`} type="search" value={searchInput} onChange={onSearch} placeholder={searchPlaceHolderValue}/>
                    <LuSearch/> 
                    {/* <i className="fa-light fa-magnifying-glass"></i>  */}
                    
                    {/* <MdOutlineDensityMedium/> */}
                    {/* <BsModemFill/> */}
                    {/* <FaBeer /> */}
                    
                    </Link>
                {/* </div> */}
                      {/* <div className="cart"><CartButton/></div> */}
                      {/* <div className="carts"><CartButton/></div> */}
                              </div>
        <div className="comp">
          { location.pathname === '/' ? <Company/> : ''}
        </div>
        </div>
     {/* </div> */}
         { toggleMenu && <ul id="list" className="sidebar-list">
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              {/* <GiPerspectiveDiceSixFacesRandom/> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Shop (demo)</span>
              {/* <i className="fa-regular fa-arrow-right"></i> */}
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Catagores (demo)</span>
              {/* <i className="fa-regular fa-arrow-right"></i> */}
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>High Price (demo)</span>
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Low Price (demo)</span>
              {/* <i className="fa-regular fa-arrow-right"></i> */}
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Big Sizes (demo)</span>
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Low Price2 (demo)</span>
            </li>
            <li>
              {/* <i className="fa-light fa-user"></i> */}
              <GiPerspectiveDiceSixFacesRandom/>
              <span>Top products (demo)</span>
              {/* <i className="fa-regular fa-arrow-right"></i> */}
            </li>
          </ul>}
        </Fragment>
    )
}

export default NavBar;