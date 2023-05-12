import React, { FC } from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "../src/constants/routes/index";

import SignUp from "./UI/pages/SignUp";
import SignIn from "./UI/pages/SignIn";
import Home from "./UI/pages/Home";
import Movies from "./UI/pages/Movies";
import Trending from "./UI/pages/Trending";
import Movie from "./UI/pages/Movie";

import { PrivateRoutes, PrivateRoute } from "./UI/pages/PrivateRoutes";
import UserProfile from "./UI/pages/UserProfile";
import Favourites from "./UI/pages/Favourites";

import NotFound from "./UI/pages/NotFound";

const App: FC = () => (
  <Routes>
    <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
    <Route element={<PrivateRoute />}>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    </Route>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.MOVIES} element={<Movies />} />
    <Route path={ROUTES.TRENDING} element={<Trending />} />
    <Route path={ROUTES.MOVIE} element={<Movie />} />
    <Route element={<PrivateRoutes />}>
      <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
      <Route path={ROUTES.FAVOURITES} element={<Favourites />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
