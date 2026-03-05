import React from "react";

const CustomHook = (initvalue) => {
  const [value, setValue] = React.useState(initvalue);

  return [
    { value: value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initvalue),
  ];
};

export default CustomHook;
