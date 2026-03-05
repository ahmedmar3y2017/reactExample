import React, { useEffect } from "react";

const TimerExample = () => {
  const [timer, setTimer] = React.useState(0);
  const [dataLoading, setDataLoading] = React.useState(false);

  useEffect(() => {
    console.log("TimerExample component mounted");
    setDataLoading(true);
  }, []);

  React.useEffect(() => {
    setDataLoading(false);

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      setDataLoading(false);
    };
  }, [timer]);

  return (
    <>
      {dataLoading ? <p>Timer with useEffect</p> : ""}
      <button onClick={() => setTimer(0)}>Reset Timer</button>
      <p>Timer: {timer} seconds</p>
    </>
  );
};

export default TimerExample;
