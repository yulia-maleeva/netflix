import React, { FC } from "react";

import Slider from "../Slider";
import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

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
          <p className="text-xl font-medium text-white my-3">Popular</p>
          <Slider moviesList={popularMovies.results} />
        </>
      ) : null}
    </section>
  );
};

export default PopularMovies;
