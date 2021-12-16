import { createSlice } from "@reduxjs/toolkit";

export interface StoksType {
  arr: any;
  prevArr: any;
}

const initialState: StoksType = {
  arr: [],
  prevArr: [
    {
      ticker: "AAPL",
      exchange: "NASDAQ",
      price: "217.88",
      change: "53.67",
      change_percent: "0.62",
    },
    {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: "186.90",
      change: "5.91",
      change_percent: "0.05",
    },
    {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: "200.08",
      change: "182.94",
      change_percent: "0.04",
    },
    {
      ticker: "AMZN",
      exchange: "NASDAQ",
      price: "229.14",
      change: "143.78",
      change_percent: "0.07",
    },
    {
      ticker: "FB",
      exchange: "NASDAQ",
      price: "170.52",
      change: "4.99",
      change_percent: "0.41",
    },
    {
      ticker: "TSLA",
      exchange: "NASDAQ",
      price: "279.07",
      change: "69.92",
      change_percent: "0.33",
    },
  ],
};

export const stoksSlice = createSlice({
  name: "stoks",
  initialState,
  reducers: {
    stoksChanger: (state, action) => {
      state.prevArr = state.arr;
      state.arr = action.payload;
    },
  },
});

export const { stoksChanger } = stoksSlice.actions;

export default stoksSlice.reducer;
