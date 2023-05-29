import React, { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "../../../types";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Button from "../../atoms/Button";

import {
  TextController,
  EmailController,
  PasswordController,
} from "../../molecules/FormControllers";

const RegistrationForm: FC = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
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
      className="w-full flex flex-col gap-4 p-12 bg-black rounded"
    >
      <h1 className="mb-5 text-[32px] font-medium text-white">Registration</h1>
      <TextController
        name="firstName"
        control={control}
        rules={{
          required: "First name is required",
          minLength: {
            value: 3,
            message: "First name should be at least 3 characters",
          },
        }}
        placeholder="Name"
        variant="filled"
      />
      <EmailController name="email" control={control} variant="filled" />
      <PasswordController name="password" control={control} variant="filled" />
      <Button variant="red" className="w-[200px] mt-5 mb-5">
        Sign up
      </Button>
      <p className="text-neutral-500">
        Already have an account?&nbsp;
        <Link
          to={ROUTES.SIGN_IN}
          className="text-white hover:underline decoration-white"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
