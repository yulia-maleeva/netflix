import React, { FC } from "react";

import AuthLayout from "./components/templates/AuthLayout";

import { Routes, Route } from "react-router-dom";
import ROUTES from "../src/constants/routes/index";

import SignUp from "./UI/pages/SignUp";
import SignIn from "./UI/pages/SignIn";
import Home from "./UI/pages/Home";
import Movies from "./UI/pages/Movies";
import Trending from "./UI/pages/Trending";
import Movie from "./UI/pages/Movie";

import { AuthRoute, NonAuthRoute } from "./UI/pages/PrivateRoutes";
import UserProfile from "./UI/pages/UserProfile";
import Favourites from "./UI/pages/Favourites";

import NotFound from "./UI/pages/NotFound";

const App: FC = () => (
  <Routes>
    <Route
      path={ROUTES.HOME}
      element={
        <AuthLayout>
          <Home />
        </AuthLayout>
      }
    />
    <Route
      path={ROUTES.MOVIES}
      element={
        <AuthLayout>
          <Movies />
        </AuthLayout>
      }
    />
    <Route
      path={ROUTES.TRENDING}
      element={
        <AuthLayout>
          <Trending />
        </AuthLayout>
      }
    />
    <Route
      path={ROUTES.MOVIE}
      element={
        <AuthLayout>
          <Movie />
        </AuthLayout>
      }
    />
    <Route element={<AuthRoute />}>
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
    </Route>
    <Route element={<NonAuthRoute />}>
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
