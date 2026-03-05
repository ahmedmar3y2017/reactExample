import React from "react";

const usePrevState = (state) => {
  const prevState = React.useRef();
  React.useEffect(() => {
    prevState.current = state;
  }, [state]);

  return prevState.current;
};

export default usePrevState;
