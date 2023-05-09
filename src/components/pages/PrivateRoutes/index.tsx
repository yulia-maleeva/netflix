import React, { FC } from "react";

import { Outlet, Navigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

const PrivateRoutes: FC = () => {
  let isAuthorized: boolean = false;

  return isAuthorized ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoutes;
