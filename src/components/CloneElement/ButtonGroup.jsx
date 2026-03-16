import React from "react";

const ButtonGroup = ({ children }) => {
  // cloned children button and pass child , props , child props
  const cloneChildren = React.Children.map(children, (child) => {
    const buttonProps = child.props;
    const text = buttonProps.children;
    console.log("Button Child is : ", buttonProps);

    return React.cloneElement(child, {
      name: (text ? text : buttonProps.name) + " ! cloned",

      onClick:
        buttonProps.onClick ||
        (() => {
          console.log("Button clicked group");
        }),
      className: buttonProps.className || "bg-warning",
    });
  });

  return <div className="d-flex flex-column gap-2">{cloneChildren}</div>;
};

export default ButtonGroup;
