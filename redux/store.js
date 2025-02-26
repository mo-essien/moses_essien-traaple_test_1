import { configureStore } from '@reduxjs/toolkit';
import foodSlice from './foodSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    food: foodSlice,
    cart: cartSlice,
  },
});

export default store;