import React, { FC } from "react";

import { Outlet, Navigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import AuthLayout from "../../../components/templates/AuthLayout";
import NonAuthLayout from "../../../components/templates/NonAuthLayout";

const isAuthorized: boolean = false;

export const AuthRoute: FC = () => {
  return isAuthorized ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} />
  );
};

export const NonAuthRoute: FC = () => {
  return isAuthorized ? (
    <Navigate to={ROUTES.HOME} />
  ) : (
    <NonAuthLayout>
      <Outlet />
    </NonAuthLayout>
  );
};
