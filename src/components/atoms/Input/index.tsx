import React, { FC } from "react";

interface IInput {
  type: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const Input: FC<IInput> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={className}
  />
);

export default Input;
