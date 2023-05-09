import React, { FC } from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "../src/constants/routes/index";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import Trending from "./components/pages/Trending";
import Movie from "./components/pages/Movie";

import PrivateRoutes from "./components/pages/PrivateRoutes";
import UserProfile from "./components/pages/UserProfile";
import Favourites from "./components/pages/Favourites";

import NotFound from "./components/pages/NotFound";

const App: FC = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<Login />} />
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
