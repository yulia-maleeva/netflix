import React, { FC, ReactNode } from "react";

interface IButton {
  text: string;
  icon?: ReactNode;
  background: string;
  color: string;
}

const Button: FC<IButton> = ({ icon, text, background, color }) => (
  <button
    className={`flex items-center gap-3 p-3 text-2xl font-medium ${background} ${color} rounded hover:opacity-80 `}
  >
    {icon}
    <p>{text}</p>
  </button>
);

export default Button;
