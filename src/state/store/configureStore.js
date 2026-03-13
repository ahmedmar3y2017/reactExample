import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./authSlice";

import { reducer } from "./counterSlice";

const store1 = configureStore({
  reducer: { counter: reducer, auth: authReducer },
});

export default store1;
