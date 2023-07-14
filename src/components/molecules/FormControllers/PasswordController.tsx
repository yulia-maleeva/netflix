import React, { FC } from "react";

import { Controller } from "react-hook-form";
import { IController } from "~/types";

import Input from "~/components/atoms/Input";
import FormErrorMessage from "~/components/atoms/FormErrorMessage";

const PasswordController: FC<IController> = ({
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

export default PasswordController;
