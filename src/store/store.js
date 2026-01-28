import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feature/product/productSlice"

const store = configureStore({
  reducer: {
    Product: productSlice,
  },
});

export default store;
