import { createSlice } from '@reduxjs/toolkit';

export const favouriteSlice = createSlice({
     name: 'favouriteList',
     initialState: {
          favouriteList: null
     },
     reducers: {
          addFavouriteList: (state, action) => {
               state.favouriteList = action.payload;
          }
     }
});

export const { addFavouriteList } = favouriteSlice.actions;
export const selectFavouriteList = state => state.favouriteList.favouriteList;
export default favouriteSlice.reducer;