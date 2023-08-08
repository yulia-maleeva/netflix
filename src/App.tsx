import React, { FC } from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "~/constants/routes";

import AuthLayout from "~/components/templates/AuthLayout";
import Home from "~/UI/pages/Home";
import Movies from "~/UI/pages/Movies";
import Trending from "~/UI/pages/Trending";
import Genre from "~/UI/pages/Genre";
import Movie from "~/UI/pages/Movie";
import About from "~/UI/pages/About";
import PrivacyPolicy from "~/UI/pages/PrivacyPolicy";
import TermsOfUse from "~/UI/pages/TermsOfUse";
import Cookies from "~/UI/pages/Cookies";
import MovieSearch from "~/UI/pages/MovieSearch";

import { AuthRoute, NonAuthRoute } from "~/UI/pages/PrivateRoutes";
import UserProfile from "~/UI/pages/UserProfile";
import Favourites from "~/UI/pages/Favourites";
import SignUp from "~/UI/pages/SignUp";
import SignIn from "~/UI/pages/SignIn";

import NotFound from "~/UI/pages/NotFound";

const App: FC = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={`${ROUTES.MOVIES}/:type?`} element={<Movies />} />
      <Route path={ROUTES.TRENDING} element={<Trending />} />
      <Route path={ROUTES.GENRE} element={<Genre />} />
      <Route path={`${ROUTES.MOVIE}/:id`} element={<Movie />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
      <Route path={ROUTES.TERMS_OF_USE} element={<TermsOfUse />} />
      <Route path={ROUTES.COOKIES} element={<Cookies />} />
      <Route path={ROUTES.MOVIE_SEARCH} element={<MovieSearch />} />
    </Route>
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
