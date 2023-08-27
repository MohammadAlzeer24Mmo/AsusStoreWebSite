import { createSlice } from "@reduxjs/toolkit";


const productsStatus = createSlice({
  name: "ui",
  initialState: { productStatus: "" , search:""},
  reducers: {
    toggle(state,action) {
      state.productStatus = action.payload;
    },
    searchWords(state,action) {
      state.search = action.payload;
    }
  }
});

export const productsStatusActions = productsStatus.actions;

export default productsStatus;
