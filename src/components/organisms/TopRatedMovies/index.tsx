import React, { FC } from "react";

import Slider from "~/components/organisms/Slider";
import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

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
          <p className="text-xl font-medium text-white my-3">Top Rated</p>
          <Slider moviesList={topratedMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default TopRatedMovies;
