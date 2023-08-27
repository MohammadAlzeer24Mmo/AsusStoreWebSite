import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import recommendedProductsSlice from "./recommendedProducts-slice";
import productsSlice from "./products-slice";
import productsStatus from "./productStatus-slice";


const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    recommendedProducts: recommendedProductsSlice.reducer,
    productsStatus:productsStatus.reducer
  },
});

export default store;
