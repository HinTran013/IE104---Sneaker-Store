import { configureStore } from '@reduxjs/toolkit';
import customerReducer from '../features/customerSlice';

export default configureStore({
     reducer: {
          customer: customerReducer
     }
});