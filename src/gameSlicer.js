import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { newsTranding } from './api';
import axios from 'axios';

const initialState = {
  currentFetchedGames: [],
  currentFetchUrl: null,
  status: null,
  error: null,
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (url, { rejectWithValue, dispatch }) => {
    const response = await axios.get(url);

    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        dispatch(getUrl(url));

        console.log(response.data.results);
        return response.data.results;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const reloadGames = createAsyncThunk(
  'games/reloadGames',
  async (url, { rejectWithValue, dispatch }) => {
    const response = await axios.get(url);

    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        dispatch(getUrl(url));

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
  reducers: {
    getUrl: (state, action) => {
      state.currentFetchUrl = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.currentFetchedGames.push(...action.payload);
    });
    builder.addCase(reloadGames.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.currentFetchedGames = action.payload;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
    builder.addCase(fetchGames.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
  },
});

export const { fetch, getUrl, reload } = fetchSlice.actions;
export default fetchSlice.reducer;
