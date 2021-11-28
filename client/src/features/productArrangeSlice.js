import { createSlice } from "@reduxjs/toolkit";

// "http://localhost:3001/productPage?page=0";
const initialStateValue = {
  brand: "",
  price: "",
  color: "",
  size: "",
  tag: "",
  filterPath: ``,
};

export const ProductArrangeSlice = createSlice({
  name: "productArrange",
  initialState: { value: initialStateValue },
  reducers: {
    resetFilter: (state, action) => {
      state.value.brand = "";
      state.value.price = "";
      state.value.color = "";
      state.value.size = "";
      state.value.tag = "";
      state.value.filterPath = "";
    },

    addBrandFilter: (state, action) => {
      // state.productArrange += `&${action.payload}`;
      state.value.brand = action.payload.brand;
      state.value.filterPath += `&brand=${action.payload.brand}`;
    },

    deleteBrandFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `&brand=${state.value.brand}`,
        ""
      );
      state.value.brand = "";
    },

    addPriceFilter: (state, action) => {
      state.value.price = action.payload.price;
      state.value.filterPath += `${action.payload.price}`;
    },

    deletePriceFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `${state.value.price}`,
        ""
      );
      state.value.price = "";
    },

    addColorFilter: (state, action) => {
      state.value.color = action.payload.color;
      state.value.filterPath += `&color=${action.payload.color}`;
    },

    deleteColorFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `&color=${state.value.color}`,
        ""
      );
      state.value.brand = "";
    },

    addSizeFilter: (state, action) => {
      state.value.size = action.payload.size;
      state.value.filterPath += `${action.payload.size}`;
    },

    deleteSizeFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `${state.value.size}`,
        ""
      );
      state.value.size = "";
    },

    addTagFilter: (state, action) => {
      state.value.tag = action.payload.tag;
      state.value.filterPath += `${action.payload.tag}`;
    },

    deleteTagFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `${state.value.tag}`,
        ""
      );
      state.value.tag = "";
    },
  },
});

export const {
  resetFilter,
  addBrandFilter,
  addPriceFilter,
  addColorFilter,
  addSizeFilter,
  addTagFilter,
  deleteBrandFilter,
  deletePriceFilter,
  deleteColorFilter,
  deleteSizeFilter,
  deleteTagFilter,
} = ProductArrangeSlice.actions;

export default ProductArrangeSlice.reducer;
