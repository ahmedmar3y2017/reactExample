import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterRedux1 = () => {
  const count = useSelector((state) => state.count);
  const name = useSelector((state) => state.name);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payload: { increase: 5, name: "Increase" } });
  };

  const decreaseHandler = () => {
    dispatch({ type: "DECREASE", payload: { decrease: 5, name: "Decrease" } });
  };

  return (
    <div className="text-2xl font-bold mb-4">
      <div>Counter Redux : {count}</div>
      <div>Name: {name}</div>

      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  );
};

export default CounterRedux1;
