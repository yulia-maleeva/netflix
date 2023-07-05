import React, { FC } from "react";

import Slider from "../../../components/organisms/Slider";
import Preloader from "../../atoms/Preloader";
import ErrorMessage from "../../atoms/ErrorMessage";

import { useGetUpcomingMoviesQuery } from "../../../store/api";

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
          <p className="text-xl font-medium text-white my-3">Upcoming</p>
          <Slider moviesList={upcomingMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default UpcomingMovies;
