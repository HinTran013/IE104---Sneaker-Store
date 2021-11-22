import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import ProductArrangeReducer from "../features/productArrangeSlice";
import favouriteReducer from "../features/favouriteSlice";

export default configureStore({
  reducer: {
    customer: customerReducer,
    productArrange: ProductArrangeReducer,
    favouriteList: favouriteReducer
  },
});
