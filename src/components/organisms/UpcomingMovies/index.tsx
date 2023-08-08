import React, { FC } from "react";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import Slider from "~/components/organisms/Slider";
import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { useGetUpcomingMoviesQuery } from "~/store/api";

const UpcomingMovies: FC = () => {
  const {
    data: upcomingMovies,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesLoading,
  } = useGetUpcomingMoviesQuery();

  return (
    <section>
      {upcomingMoviesError ? (
        <ErrorMessage
          status={upcomingMoviesError.status}
          message={upcomingMoviesError.data.status_message}
        />
      ) : null}
      {upcomingMoviesLoading ? <Preloader /> : null}
      {upcomingMovies ? (
        <>
          <p className="text-xl font-medium pb-1 text-white">Upcoming</p>
          <Link
            to={`${ROUTES.MOVIES}/upcoming`}
            className="w-fit flex items-center gap-1 pb-3 text-s text-white hover:font-medium"
          >
            See all <ArrowRightIcon className="h-3.5 text-white" />
          </Link>
          <Slider moviesList={upcomingMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default UpcomingMovies;
