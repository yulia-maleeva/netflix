import React, { FC } from "react";

interface IInput {
  type: string;
  name: string;
  value?: string | number;
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: "none" | "medium";
  color?: "default" | "transparent";
  border?: boolean;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  ref,
  placeholder,
  onChange,
  padding,
  color,
  border,
}) => {
  const inputPadding = padding === "medium" ? "p-4" : "p-0";

  const inputColor =
    color === "transparent" ? "bg-transparent" : "bg-neutral-850";

  const inputBorder = border
    ? "border-b-2 border-orange-550 rounded"
    : "border-0";

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      className={`w-full h-full text-white outline-none appearance-none ${inputPadding} ${inputColor} ${inputBorder}`}
    />
  );
};

export default Input;
