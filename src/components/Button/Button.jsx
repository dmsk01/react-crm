import React from "react";

function Button({ children, type = "button", onClick, className }) {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
