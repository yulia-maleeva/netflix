import React, { FC } from "react";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import Slider from "~/components/organisms/Slider";
import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { useGetPopularMoviesQuery } from "~/store/api";

const PopularMovies: FC = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useGetPopularMoviesQuery();

  return (
    <section>
      {popularMoviesError ? (
        <ErrorMessage
          status={popularMoviesError.status}
          message={popularMoviesError.data.status_message}
        />
      ) : null}
      {popularMoviesLoading ? <Preloader /> : null}
      {popularMovies ? (
        <>
          <p className="text-xl font-medium pb-1 text-white">Popular</p>
          <Link
            to={`${ROUTES.MOVIES}/popular`}
            className="w-fit flex items-center gap-1 pb-3 text-s text-white hover:font-medium"
          >
            See all <ArrowRightIcon className="h-3.5 text-white" />
          </Link>
          <Slider moviesList={popularMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default PopularMovies;
