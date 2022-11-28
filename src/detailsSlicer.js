import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gameScreenshots, gameDetails } from './api';
import axios from 'axios';

const initialState = {
  gameDetails: {},
  screenshots: [],
  status: null,
  screenStatus: null,
  error: null,
};

export const fetchGameDitails = createAsyncThunk(
  'games/fetchGameDitails',
  async (id, { rejectWithValue }) => {
    const response = await axios.get(gameDetails(id));
    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchGameScreenshots = createAsyncThunk(
  'games/fetchGameScreenshots',
  async (id, { rejectWithValue }) => {
    const response = await axios.get(gameScreenshots(id));
    try {
      if (response.status !== 200) {
        throw new Error(
          'Something went wrong with server... Try again later please.'
        );
      } else {
        return response.data.results;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGameDitails.pending]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchGameDitails.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [fetchGameDitails.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.error = null;
      state.gameDetails = action.payload;
    },
    [fetchGameScreenshots.fulfilled]: (state, action) => {
      state.screenStatus = 'fulfilled';
      state.error = null;
      state.screenshots = action.payload;
    },
    [fetchGameScreenshots.pending]: (state, action) => {
      state.screenStatus = 'pending';
      state.error = null;
      state.screenshots = action.payload;
    },
  },
});

export const { details } = detailSlice.actions;
export default detailSlice.reducer;
