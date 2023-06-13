import React, { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInputs } from "../../../types";

import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Button from "../../atoms/Button";

import {
  EmailController,
  PasswordController,
} from "../../molecules/FormControllers";

const LoginForm: FC = () => {
  //const isAuthorized = true;

  //const navigate = useNavigate();

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

    // if (isAuthorized) {
    //   navigate(`${ROUTES.HOME}`);
    // } else {
    //   navigate(`${ROUTES.SIGN_UP}`);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-70 flex flex-col gap-4"
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
      <Button type="submit" variant="red" className="w-50 my-5 self-center">
        Sign in
      </Button>
      <p className="text-neutral-500 text-center">
        First time at Netflix?&nbsp;
        <Link
          to={ROUTES.SIGN_UP}
          className="text-white hover:underline decoration-white"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
