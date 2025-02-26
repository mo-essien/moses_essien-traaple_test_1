
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFoodItems = createAsyncThunk('food/menu', async () => {
  const response = await axios.get('http://localhost:3000/menu');
  return response.data;
});

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;