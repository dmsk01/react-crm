import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

function Button({ children, type = "button", onClick, className }: IButton) {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <button onClick={handleClick} className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
