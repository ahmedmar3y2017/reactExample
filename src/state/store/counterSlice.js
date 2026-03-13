import { createSlice } from "@reduxjs/toolkit";

import { logout } from "./authSlice";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.count += action.payload.increase;
      state.name = action.payload.name;
    },
    decrease: (state, action) => {
      state.count -= action.payload.decrease;
      state.name = action.payload.name;
    },
    changeName: (state, action) => {
      state.name = action.payload.name;
    },
  },
  // listen to other slice action to do logic or change this slice state
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      console.log(action);

      state.count = action.payload.count;
      state.name = "Listen Logout";
    });
  },
});

export const reducer = counterSlice.reducer;
export const { increase, decrease, changeName } = counterSlice.actions;
