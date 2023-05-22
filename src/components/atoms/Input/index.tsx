import React, { FC } from "react";

interface IInput {
  type: string;
  name: string;
  value?: string | number;
  inputRef?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "filled" | "transparent";
  className?: string;
  focus?: boolean;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  inputRef,
  placeholder,
  onChange,
  variant,
  className,
  focus,
}) => {
  const generateInputVariant = () => {
    switch (variant) {
      case "filled":
        return "bg-neutral-850 text-white border-b-2 border-orange-550 rounded p-4";
      case "transparent":
        return "bg-transparent text-white";
      default:
        return "bg-white text-black border border-black p-1";
    }
  };

  return (
    <input
      type={type}
      name={name}
      value={value}
      ref={inputRef}
      placeholder={placeholder}
      onChange={onChange}
      className={`w-full h-full outline-none appearance-none ${generateInputVariant()} ${className}`}
      autoFocus={focus}
    />
  );
};

export default Input;
