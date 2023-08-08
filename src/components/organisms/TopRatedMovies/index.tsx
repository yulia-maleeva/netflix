import React, { FC } from "react";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import Slider from "~/components/organisms/Slider";
import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { useGetTopRatedMoviesQuery } from "~/store/api";

const TopRatedMovies: FC = () => {
  const {
    data: topratedMovies,
    error: topRatedMoviesError,
    isLoading: topratedMoviesLoading,
  } = useGetTopRatedMoviesQuery();

  return (
    <section>
      {topRatedMoviesError ? (
        <ErrorMessage
          status={topRatedMoviesError.status}
          message={topRatedMoviesError.data.status_message}
        />
      ) : null}
      {topratedMoviesLoading ? <Preloader /> : null}
      {topratedMovies ? (
        <>
          <p className="text-xl font-medium pb-1 text-white">Top Rated</p>
          <Link
            to={`${ROUTES.MOVIES}/top_rated`}
            className="w-fit flex items-center gap-1 pb-3 text-s text-white hover:font-medium"
          >
            See all <ArrowRightIcon className="h-3.5 text-white" />
          </Link>
          <Slider moviesList={topratedMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default TopRatedMovies;
