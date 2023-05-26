import React, { FC } from "react";

import { Controller, Control, FieldValues } from "react-hook-form";
import { IFormInputs } from "../../../types";

import Input from "../../atoms/Input";
import FormErrorMessage from "../../atoms/FormErrorMessage";

interface IController {
  name: keyof IFormInputs;
  control: Control<IFormInputs>;
  rules?: FieldValues;
  placeholder?: string;
  variant?: "filled" | "transparent";
  className?: string;
}

export const TextController: FC<IController> = ({
  name,
  control,
  rules,
  placeholder,
  variant,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input
            type="text"
            placeholder={placeholder}
            variant={variant}
            className={className}
            {...field}
          />
          {error && <FormErrorMessage errorMessage={error.message} />}
        </>
      )}
    />
  );
};

export const EmailController: FC<IController> = ({
  name,
  control,
  variant,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Email is required",
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message:
            "Invalid email address. Please enter a valid email address in the format 'example@example.com'.",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input
            type="email"
            placeholder="Email"
            variant={variant}
            className={className}
            {...field}
          />
          {error && <FormErrorMessage errorMessage={error.message} />}
        </>
      )}
    />
  );
};

export const PasswordController: FC<IController> = ({
  name,
  control,
  variant,
  className,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "Password is required",
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
          message:
            "Password must be at least 8 characters long and include a combination of uppercase letters, lowercase letters, and digits.",
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input
            type="password"
            placeholder="Password"
            variant={variant}
            className={className}
            {...field}
          />
          {error && <FormErrorMessage errorMessage={error.message} />}
        </>
      )}
    />
  );
};