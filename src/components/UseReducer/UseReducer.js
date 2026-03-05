import React from "react";

const initMessage = { counter: 0 };
const UseReducer = () => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "increment":
        return { counter: state.counter + 1 };
      case "decrement":
        return { counter: state.counter - 1 };
      default:
        return state;
    }
  }, initMessage);
  return (
    <>
      <p>Counter {state.counter}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </>
  );
};

export default UseReducer;
