import React from "react";

const Button = ({ onClick, className, text, disabled = true }) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
