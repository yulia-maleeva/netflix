import React, { FC } from "react";

import Slider from "../../../components/organisms/Slider";
import Preloader from "../../atoms/Preloader";
import ErrorMessage from "../../atoms/ErrorMessage";

import { useGetPopularMoviesQuery } from "../../../store/api";

const PopularMovies: FC = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useGetPopularMoviesQuery();

  return (
    <section>
      {popularMoviesError && <ErrorMessage />}
      {popularMoviesLoading && <Preloader />}
      {popularMovies && (
        <>
          <p className="text-xl font-medium text-white my-3">Popular</p>
          <Slider moviesList={popularMovies.results} />
        </>
      )}
    </section>
  );
};

export default PopularMovies;
