import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './gameSlicer';
import detailsSlicer from './detailsSlicer';

export const store = configureStore({
  reducer: {
    game: fetchSlice,
    details: detailsSlicer
  },
});
