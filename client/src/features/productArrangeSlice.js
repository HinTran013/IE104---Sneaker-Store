import { createSlice } from "@reduxjs/toolkit";

// "http://localhost:3001/productPage?page=0";
const initialStateValue = {
  pageNumber: "0",
  brand: "",
  price: "",
  color: "",
  size: "",
  tags: "",
  apiURL: `http://localhost:3001/productPage?`,
};

export const ProductArrangeSlice = createSlice({
  name: "productArrange",
  initialState: { value: initialStateValue },
  reducers: {
    addBrandFilter: (state, action) => {
      // state.productArrange += `&${action.payload}`;
      state.value.apiURL += `&brand=${action.payload.brand}`;
    },

    deleteBrandFilter: (state, action) => {
      state.value.apiURL = state.value.apiURL.replace(
        `&brand=${state.value.brand}`,
        ""
      );
    },

    addPriceFilter: (state, action) => {
      // state.productArrange += `&${action.payload}`;
      state.value.apiURL += `&price=${action.payload.price}`;
    },

    deletePriceFilter: (state, action) => {
      state.value.apiURL = state.value.apiURL.replace(
        `&price=${state.value.price}`,
        ""
      );
    },
  },

  addColorFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.apiURL += `&color=${action.payload.color}`;
  },

  deleteColorFilter: (state, action) => {
    state.value.apiURL = state.value.apiURL.replace(
      `&color=${state.value.color}`,
      ""
    );
  },

  addSizeFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.apiURL += `&size=${action.payload.size}`;
  },

  deleteSizeFilter: (state, action) => {
    state.value.apiURL = state.value.apiURL.replace(
      `&size=${state.value.size}`,
      ""
    );
  },

  addTagsFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.apiURL += `&tags=${action.payload.tags}`;
  },

  deleteTagsFilter: (state, action) => {
    state.value.apiURL = state.value.apiURL.replace(
      `&tags=${state.value.tags}`,
      ""
    );
  },
});

export const {
  addBrandFilter,
  addPriceFilter,
  addColorFilter,
  addSizeFilter,
  addTagsFilter,
  deleteBrandFilter,
  deletePriceFilter,
  deleteColorFilter,
  deleteSizeFilter,
  deleteTagsFilter,
} = ProductArrangeSlice.actions;

export default ProductArrangeSlice.reducer;
