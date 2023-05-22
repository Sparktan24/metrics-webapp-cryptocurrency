import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from '../redux/coins/coinsSlice';

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});
