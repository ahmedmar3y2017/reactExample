import React from "react";
import CustomHook from "./CustomHook";

const InputForm = () => {
  const [propsText, resetText] = CustomHook("");
  const [propsColor, resetColor] = CustomHook("#000000");
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Text is ${propsText.value} and color is ${propsColor.value}`);
    resetText();
    resetColor();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" {...propsText}></input>

        <input type="color" {...propsColor}></input>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
