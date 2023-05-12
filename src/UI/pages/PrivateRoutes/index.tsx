import React, { FC } from "react";

import { Outlet, Navigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

const isAuthorized: boolean = false;

export const PrivateRoutes: FC = () => {
  return isAuthorized ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};

export const PrivateRoute: FC = () => {
  return isAuthorized ? <Navigate to={ROUTES.HOME} /> : <Outlet />;
};
