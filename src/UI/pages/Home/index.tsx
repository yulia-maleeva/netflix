import React, { FC } from "react";

import {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../../../store/api";

import CategoryTitle from "../../../components/atoms/CategoryTitle";
import Slider from "../../../components/organisms/Slider";

import { IMovieCard } from "../../../components/organisms/MovieCard";


const Home: FC = () => {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useGetPopularMoviesQuery();

  const {
    data: topratedMovies,
    error: topRatedMoviesError,
    isLoading: topratedMoviesLoading,
  } = useGetTopRatedMoviesQuery();

  const {
    data: upcomingMovies,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesLoading,
  } = useGetUpcomingMoviesQuery();

  //const {results: popularMoviesResults = []} = popularMovies
  //popularMovies && console.log(popularMovies.results);

  return (
    <>
      <section>
        {popularMoviesError && <p className="text-red-500">Error!</p>}
        {popularMoviesLoading && <p className="text-red-500">Loading...</p>}
        {popularMovies && (
          <>
            <CategoryTitle categoryTitle="Popular" />
            <Slider moviesList={popularMovies.results} />
          </>
        )}
      </section>

      <section>
        {topRatedMoviesError && <p className="text-red-500">Error!</p>}
        {topratedMoviesLoading && <p className="text-red-500">Loading...</p>}
        {topratedMovies && (
          <>
            <CategoryTitle categoryTitle="Top Rated" />
            <Slider moviesList={topratedMovies.results} />
          </>
        )}
      </section>

      <section>
        {upcomingMoviesError && <p className="text-red-500">Error!</p>}
        {upcomingMoviesLoading && <p className="text-red-500">Loading...</p>}
        {upcomingMovies && (
          <>
            <CategoryTitle categoryTitle="Upcoming" />
            <Slider moviesList={upcomingMovies.results} />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
