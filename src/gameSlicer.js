import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { newsTranding } from './api';
import axios from 'axios';

const initialState = {
  popular: [],
  status: null,
  error: null,
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (page = 1, { rejectWithValue }) => {
    const response = await axios.get(newsTranding(page));
    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        console.log(response.data.results);
        return response.data.results;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.popular.push(...action.payload)
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchGames.pending, (state, action) => {
      state.status = 'pending';
      state.error = null;
    });
  },
});

export const { fetch } = fetchSlice.actions;
export default fetchSlice.reducer;
