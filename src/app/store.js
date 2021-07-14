import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reviewNewSlice from '../features/PlayerReviewSlice/PlayerReviewSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reviews: reviewNewSlice
  },
});
