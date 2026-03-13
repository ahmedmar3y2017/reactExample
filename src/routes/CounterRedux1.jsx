import React, { useCallback, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CounterRedux1 = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    callbackCounter("INCREASE", { increase: 5, name: "Increase" });
  };

  const decreaseHandler = () => {
    callbackCounter("DECREASE", { decrease: 5, name: "Decrease" });
  };

  const togglehandler = () => {
    callbackCounter("TOGGLE", null);
  };

  const callbackCounter = useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch],
  );
  useEffect(() => {
    callbackCounter("INCREASE", { increase: 10, name: "Increase" });
  }, []);
  return (
    <div className="text-2xl font-bold mb-4">
      {state.toggle && (
        <>
          <div>Counter Redux : {state.count}</div>
          <div>Name: {state.name}</div>

          <Button variant="success" onClick={increaseHandler}>
            Increase
          </Button>
          <Button variant="danger" onClick={decreaseHandler}>
            Decrease
          </Button>
        </>
      )}

      <br />
      <Button variant="primary" onClick={togglehandler}>
        Show / Hide toggle
      </Button>
    </div>
  );
};

export default CounterRedux1;
