import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
};

const initialState: CounterType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action?.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action?.payload;
    },
  },
});

export const { decrement, increment } = counterSlice.actions;

export default counterSlice.reducer;
