import React from "react";

const Button = ({ name, onClick }) => {
  console.log("name is ", name);

  return (
    <button className="bg-warning" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
