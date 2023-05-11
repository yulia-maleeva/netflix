import React, { FC } from "react";

interface IInput {
  type: string;
  name: string;
  placeholder?: string;
}

const Input: FC<IInput> = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    className="w-full h-[50px] p-4 bg-custom-dark-gray text-white border-b-2 rounded border-custom-orange outline-none"
  ></input>
);

export default Input;
