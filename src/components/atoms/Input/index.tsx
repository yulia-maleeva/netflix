import React, { FC } from "react";

interface IInput {
  type: string;
  name: string;
  value?: string | number;
  ref?: React.Ref<HTMLInputElement>;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: string;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  ref,
  placeholder,
  onChange,
  variant,
}) => {
  const searchInputStyle: string = "w-full h-full bg-transparent";
  const hiddenInputStyle: string = "hidden";
  const defaultInputStyle: string =
    "w-full h-[50px] p-4 bg-neutral-850 border-b-2 rounded border-orange-550";

  const inputVariant =
    variant === "search"
      ? searchInputStyle
      : variant === "hidden"
      ? hiddenInputStyle
      : defaultInputStyle;

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      className={`text-white outline-none appearance-none ${inputVariant}`}
    />
  );
};

export default Input;
