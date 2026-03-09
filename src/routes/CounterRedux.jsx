import React from "react";
import { Button } from "react-bootstrap";
import { createStore } from "redux";
const CounterRedux = () => {
  const initialState = {
    count: 0,
  };
  const counterReducer = (state = initialState, action) => {
    console.log(initialState);
    console.log(action);

    if (action.type === "INCREASE") {
      return { count: state.count + action.payload.increase };
    } else if (action.type === "DECREASE") {
      return { count: state.count - action.payload.decrease };
    }
    return state;
  };

  const store = createStore(counterReducer);

  const dispatch = store.dispatch;

  const increase = () => {
    dispatch({ type: "INCREASE", payload: { increase: 5 } });
    document.getElementById("count").innerText = store.getState().count;
  };
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { decrease: 1 } });
    document.getElementById("count").innerText = store.getState().count;
  };

  return (
    <>
      <div className="text-2xl font-bold mb-4">
        Counter with Redux : <span id="count">{store.getState().count}</span>
      </div>
      <Button id="increase" onClick={increase}>
        Increase
      </Button>
      <br></br>
      <Button id="decrease" onClick={decrease}>
        Decrease
      </Button>
    </>
  );
};

export default CounterRedux;
