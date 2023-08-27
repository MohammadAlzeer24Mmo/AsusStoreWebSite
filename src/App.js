import React from 'react';
import { Fragment, Suspense, useState } from "react";
import Home from "./pages/Home";
import './pages/HomeStyling/Home.css'
import Product from './pages/Product'
import { createBrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";
import { uiActions } from "./store/products-slice";
import navBar from "./HomeComponents/Navbar";
import About from "./pages/About";
import Catagories from "./pages/Catagories";
import SignUp from "./pages/SignUp";
import NavBar from "./HomeComponents/Navbar";
import Footer from "./Layouts/Footer";
import Developer from "./pages/Developer";
// const About = React.lazy(() => import('./pages/About'));
function App() {
  
// const [products,setProducts] = useState([])
// const [isLoading,setIsLoading] = useState(true);
// const [httpError,setHttpError] = useState();
// useEffect(() => {
// const fetchProducts = async () =>{
//   const response =  await fetch(' https://mohammad-az-default-rtdb.firebaseio.com/products.json');
//   // if(!response.ok){
//   //   throw new Error('Something went wrong!')
//   // }

//   const responseData = await response.json();
//   console.log(responseData)

//   const loadedProducts = [];
//   for(const key in responseData){
//     loadedProducts.push({
//       id:key,
//       name:responseData[key].name,
//       image:responseData[key].image
      
//     });
//   }
//   setProducts(loadedProducts)
//   setIsLoading(false)
// }

//   fetchProducts().catch((error) => {
//     setIsLoading(false)
//   setHttpError(error.message);
// });
// },[]);

// console.log(products)
// if (isLoading){
//   return(
//     <div>loading...</div>
//   );
// }

// if (httpError){
//   return(
//     <div>{httpError}</div>
//   );
// }

// const id = useSelector(state => state.ui.id)
// console.log(id)
const [toggleList, setToggleList] = useState(false);
const toggleListHandler = (toggle) => {
  setToggleList(toggle);
};
  return (

    <Fragment>
      <Suspense fallback={<div>wait</div>}>
      <BrowserRouter>
      <NavBar onToggleList={toggleListHandler}/> 
      <Routes>
      <Route path='/' element={<Home toggle={toggleList}/>}/>
      <Route path='/product/:ids' element={<Product/>}/>
      <Route path='/recommended-product/:ids' element={<Product/>}/>
      <Route path='/more-products/:ids' element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/search" element={<Catagories/>}/>
      <Route path="/developer" element={<Developer/>}/>
      </Routes>
      <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      </Routes>
       <Footer/>
      </BrowserRouter>
      </Suspense>
      </Fragment>
    );
}

export default App;
