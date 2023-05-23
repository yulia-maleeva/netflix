import React, { FC } from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Input from "../../atoms/Input";
import FormErrorMessage from "../../atoms/FormErrorMessage";

interface IFormInputs {
  firstName: string;
  email: string;
  password: string;
}

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
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message:
              "Invalid email address. Please enter a valid email address in the format 'example@example.com'.",
          },
        }}
        render={({ field }) => (
          <>
            <Input
              type="email"
              placeholder="Email"
              variant="filled"
              {...field}
            />
            {errors.email && (
              <FormErrorMessage errorMessage={errors.email.message} />
            )}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message:
              "Password must be at least 8 characters long and include a combination of uppercase letters, lowercase letters, and digits.",
          },
        }}
        render={({ field }) => (
          <>
            <Input
              type="password"
              placeholder="Password"
              variant="filled"
              {...field}
            />
            {errors.password && (
              <FormErrorMessage errorMessage={errors.password.message} />
            )}
          </>
        )}
      />
    </form>
  );
};

export default RegistrationForm;
