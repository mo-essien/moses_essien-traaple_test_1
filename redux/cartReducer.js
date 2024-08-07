import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, {payload}) => {
      state.push(payload);
    },
    removeItemFromCart: (state, {payload}) => {
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
