import React from "react";

const Button = ({ name, onClick, className }) => {
  console.log("name is ", name);

  return (
    <button className={className ? className : "bg-warning"} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
