import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "../../../types";

import Button from "../../atoms/Button";
import {
  EmailController,
  PasswordController,
} from "../../molecules/FormControllers";

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();

    navigate(`${ROUTES.HOME}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <h1 className="mb-5 text-[32px] font-medium text-white text-center">
        Login
      </h1>

      <EmailController
        name="email"
        control={control}
        variant="transparent"
        className="p-4 border border-white rounded"
      />
      <PasswordController
        name="password"
        control={control}
        variant="transparent"
        className="p-4 border border-white rounded"
      />
      <Button variant="red" className="w-[200px] mt-5 self-center">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
