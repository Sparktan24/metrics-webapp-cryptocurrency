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
      console.log(resp.data);
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state, action) => {
      //  console.log(action.payload);
      state.coinsList = action.payload;
      console.log(state.coinsList);
    });
  },
});

export default coinsSlice.reducer;
