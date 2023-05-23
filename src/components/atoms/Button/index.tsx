import React, { FC } from "react";

interface IButton {
  variant?: "white" | "gray" | "red";
  className?: string;
  children?: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({ variant, className, children, handleClick }) => {
  const generateButtonVariant = () => {
    switch (variant) {
      case "white":
        return "bg-white text-black";
      case "gray":
        return "bg-gray-350 text-white";
      case "red":
        return "bg-red-650 text-white";
      default:
        return "bg-white text-black border border-black";
    }
  };
  return (
    <button
      className={`flex justify-center items-center gap-3 p-3 text-2xl font-medium rounded hover:opacity-80 ${generateButtonVariant()} ${className}`}
      onClick={handleClick}
    >
      {children || "Click"}
    </button>
  );
};

export default Button;
