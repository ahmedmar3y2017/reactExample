import { createStore } from "redux";
const initialState = {
  count: 0,
  name: "React",
  toggle: false,
};
const counterReducer = (state = initialState, action) => {
  console.log(initialState);
  console.log(action);
  if (action.type === "INCREASE") {
    return {
      ...state,
      count: state.count + action.payload.increase,
      name: action.payload.name,
    };
  } else if (action.type === "DECREASE") {
    return {
      ...state,
      count: state.count - action.payload.decrease,
      name: action.payload.name,
    };
  } else if (action.type === "TOGGLE") {
    return {
      ...state,
      toggle: !state.toggle,
    };
  }
  return state;
};
export const counterStore = createStore(counterReducer);
