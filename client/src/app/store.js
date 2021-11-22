import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import ProductArrangeReducer from "../features/productArrangeSlice";

export default configureStore({
  reducer: {
    customer: customerReducer,
    productArrange: ProductArrangeReducer,
  },
});
