import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
     name: 'customer',
     initialState: {
          customer: null
     },
     reducers: {
          login: (state, action) => {
               state.customer = action.payload;
          },

          logout: (state) => {
               state.customer = null;
          }
     }
});

export const { login, logout } = customerSlice.actions;
export const selectCustomer = state => state.customer.customer;
export default customerSlice.reducer;