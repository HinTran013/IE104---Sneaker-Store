import { createSlice } from "@reduxjs/toolkit";

// "http://localhost:3001/productPage?page=0";
const initialStateValue = {
  brand: "",
  price: "",
  color: "",
  size: "",
  tags: "",
  filterPath: ``,
};

export const ProductArrangeSlice = createSlice({
  name: "productArrange",
  initialState: { value: initialStateValue },
  reducers: {
    resetBrandFilter: (state, action) => {
      state.value.brand = "";
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
      // state.productArrange += `&${action.payload}`;
      state.value.filterPath += `&price=${action.payload.price}`;
    },

    deletePriceFilter: (state, action) => {
      state.value.filterPath = state.value.filterPath.replace(
        `&price=${state.value.price}`,
        ""
      );
    },
  },

  addColorFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.filterPath += `&color=${action.payload.color}`;
  },

  deleteColorFilter: (state, action) => {
    state.value.filterPath = state.value.filterPath.replace(
      `&color=${state.value.color}`,
      ""
    );
  },

  addSizeFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.filterPath += `&size=${action.payload.size}`;
  },

  deleteSizeFilter: (state, action) => {
    state.value.filterPath = state.value.filterPath.replace(
      `&size=${state.value.size}`,
      ""
    );
  },

  addTagsFilter: (state, action) => {
    // state.productArrange += `&${action.payload}`;
    state.value.filterPath += `&tags=${action.payload.tags}`;
  },

  deleteTagsFilter: (state, action) => {
    state.value.filterPath = state.value.filterPath.replace(
      `&tags=${state.value.tags}`,
      ""
    );
  },
});

export const {
  resetBrandFilter,
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
