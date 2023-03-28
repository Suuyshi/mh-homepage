import React from "react";

/**
 *
 * @param {props} param0
 * @returns button component
 */
const Button = ({ buttonType, type, id, children, className, onClick }) => {
  // [Button Types]:
  // light-btn, dark-btn

  const classNames = `button-component ${buttonType} ${
    className ? className : ""
  }`;

  const props = {
    className: classNames,
    onClick,
  };

  return (
    <button type={type} id={id} {...props}>
      {children}
    </button>
  );
};

export default Button;
