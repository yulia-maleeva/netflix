import React, { FC, forwardRef, Ref, RefObject } from "react";

interface IInput {
  type: string;
  name: string;
  value?: string | number;
  ref?: Ref<HTMLInputElement> | RefObject<HTMLInputElement>;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "filled" | "transparent";
  className?: string;
  autoFocus?: boolean;
}

const Input: FC<IInput> = forwardRef(
  (
    { type, name, value, placeholder, onChange, variant, className, autoFocus },
    ref
  ) => {
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
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full h-full outline-none appearance-none ${generateInputVariant()} ${
          className || ""
        }`}
        autoFocus={autoFocus}
      />
    );
  }
);

export default Input;
