import React, { FC } from "react";

import { Controller } from "react-hook-form";

import { IController } from "../../../types";

import Input from "../../atoms/Input";
import FormErrorMessage from "../../atoms/FormErrorMessage";

const EmailController: FC<IController> = ({
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

export default EmailController;
