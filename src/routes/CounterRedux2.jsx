import React, { useCallback, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { increase, decrease, changeName } from "../state/store/counterSlice";
import { login, logout } from "../state/store/authSlice";

const CounterRedux2 = () => {
  const globalState = useSelector((state) => state);

  const dispatch = useDispatch();

  const callbackCounter = useCallback(
    (type, payload) => {
      if (type === "INCREASE") {
        dispatch(increase(payload));
      } else if (type === "DECREASE") {
        dispatch(decrease(payload));
      }
    },
    [dispatch],
  );

  const callbackName = useCallback(
    (payload) => {
      dispatch(changeName(payload));
    },
    [dispatch],
  );
  const isAuthenticated = () => {
    return globalState.auth.isAuthenticated;
  };

  const authHandler = (state) => {
    if (state.isAuthenticated) {
      dispatch(logout({count : 20 }));
    } else {
      dispatch(login());
    }
  };

  useEffect(() => {
    callbackCounter("INCREASE", { increase: 50, name: "Increase" });
    callbackName({ name: "CounterRedux2" });
  }, []);
  return (
    <div className="text-2xl font-bold mb-4">
      {isAuthenticated() && (
        <>
          <div>Counter Redux : {globalState.counter.count}</div>
          <div>Name: {globalState.counter.name}</div>

          <Button
            variant="success"
            onClick={() =>
              callbackCounter("INCREASE", { increase: 10, name: "Increase" })
            }
          >
            Increase
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              callbackCounter("DECREASE", { decrease: 5, name: "Decrease" })
            }
          >
            Decrease
          </Button>
        </>
      )}

      <br />
      <Button variant="primary" onClick={() => authHandler(globalState.auth)}>
        {isAuthenticated() ? "logout" : "login"}
      </Button>
    </div>
  );
};

export default CounterRedux2;
