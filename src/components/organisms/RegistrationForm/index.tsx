import React, { FC } from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "../../../types";

import Input from "../../atoms/Input";
import FormErrorMessage from "../../atoms/FormErrorMessage";
import Button from "../../atoms/Button";
import {
  EmailController,
  PasswordController,
} from "../../molecules/FormControllers";

const RegistrationForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 p-8 bg-black rounded"
    >
      <h1 className="mb-5 text-[32px] font-medium text-white">Registration</h1>
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: "First name is required",
          minLength: {
            value: 3,
            message: "First name should be at least 3 characters",
          },
        }}
        render={({ field }) => (
          <>
            <Input
              type="text"
              placeholder="First Name"
              variant="filled"
              {...field}
            />
            {errors.firstName && (
              <FormErrorMessage errorMessage={errors.firstName.message} />
            )}
          </>
        )}
      />
      <EmailController control={control} variant="filled" />
      <PasswordController control={control} variant="filled" />
      <Button variant="red" className="w-[200px] mt-5">
        Sign up
      </Button>
    </form>
  );
};

export default RegistrationForm;
