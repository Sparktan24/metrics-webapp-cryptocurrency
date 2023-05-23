import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coincap.io/v2/assets';

const initialState = {
  coinsList: [],
};

export const getCoins = createAsyncThunk(
  'coins/getCoins',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios(url);
      //  console.log(resp.data);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.resp.data);
    }
  },
);

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    filterCoin: (state, { payload }) => {
      const id = payload;
      const newState = state.coinsList.map((coin) => {
        if (coin.id === id) return { ...coin, display: true };
        return coin;
      });
      return { ...state, coinsList: newState };
    },
    resetCoins: (state) => {
      const newState = state.coinsList.map((coin) => ({
        ...coin,
        display: false,
      }));
      return { ...state, coinsList: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state, action) => {
      const newState = { ...state, coinsList: action.payload.data };
      return newState;
    });
  },
});

export default coinsSlice.reducer;

export const { filterCoin, resetCoins } = coinsSlice.actions;
