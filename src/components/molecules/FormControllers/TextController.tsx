import React, { FC } from "react";

import { Controller } from "react-hook-form";
import { IController } from "~/types";

import Input from "~/components/atoms/Input";
import FormErrorMessage from "~/components/atoms/FormErrorMessage";

const TextController: FC<IController> = ({
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

export default TextController;
