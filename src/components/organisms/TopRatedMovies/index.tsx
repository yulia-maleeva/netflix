import React, { FC } from "react";

import Slider from "../../../components/organisms/Slider";
import Preloader from "../../atoms/Preloader";
import ErrorMessage from "../../atoms/ErrorMessage";

import { useGetTopRatedMoviesQuery } from "../../../store/api";

const TopRatedMovies: FC = () => {
  const {
    data: topratedMovies,
    error: topRatedMoviesError,
    isLoading: topratedMoviesLoading,
  } = useGetTopRatedMoviesQuery();

  return (
    <section>
      {topRatedMoviesError && <ErrorMessage />}
      {topratedMoviesLoading && <Preloader />}
      {topratedMovies && (
        <>
          <p className="text-xl font-medium text-white my-3">Top Rated</p>
          <Slider moviesList={topratedMovies.results} />
        </>
      )}
    </section>
  );
};

export default TopRatedMovies;
