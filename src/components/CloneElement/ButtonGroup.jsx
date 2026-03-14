import React from "react";

const ButtonGroup = ({ children }) => {
  // cloned children button and pass child , props , child props
  const cloneChildren = React.Children.map(children, (child) => {
    const text = child.props.children;
    return React.cloneElement(child, {
      name: text + " ! cloned",

      onClick: () => {
        console.log("Button clicked group");
      },
    });
  });

  return <div className="d-flex flex-column gap-2">{cloneChildren}</div>;
};

export default ButtonGroup;
