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
      {upcomingMoviesError && <ErrorMessage />}
      {upcomingMoviesLoading && <Preloader />}
      {upcomingMovies && (
        <>
          <p className="text-xl font-medium text-white my-3">Upcoming</p>
          <Slider moviesList={upcomingMovies.results} />
        </>
      )}
    </section>
  );
};

export default UpcomingMovies;
