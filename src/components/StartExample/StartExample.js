import React from "react";
import { FaStar } from "react-icons/fa";

const arrayHelper = (n) => {
  return Array(n).fill(null);
};

const Start = ({ selected, onSelect }) => {
  return (
    <FaStar
      style={{ color: selected ? "gold" : "gray" }}
      onClick={() => onSelect()}
    />
  );
};

const Startrating = ({ count }) => {
  const [starCount, setStarCount] = React.useState(0);

  const set = (index) => {
    setStarCount(index + 1);
  };
  return (
    <>
      {arrayHelper(count).map((_, index) => (
        <Start
          key={index}
          selected={index < starCount}
          onSelect={() => set(index)}
        />
      ))}
      selected {starCount} stars of {count}
    </>
  );
};

const StartExample = () => {
  return (
    <div>
      <Startrating count={10} />
    </div>
  );
};

export default StartExample;
