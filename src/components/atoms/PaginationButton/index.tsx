import React, { FC } from "react";

interface IPaginationButton {
  isDisabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PaginationButton: FC<IPaginationButton> = ({
  isDisabled,
  className,
  children,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={`w-7 h-7 flex justify-center items-center p-1 border rounded-md text-xs ${className} ${
        isDisabled ? "opacity-30" : "opacity-80 hover:opacity-100"
      }`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
