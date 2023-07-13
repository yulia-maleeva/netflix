import React from "react";

import Preloader from "../../../components/atoms/Preloader";
import ErrorMessage from "../../../components/atoms/ErrorMessage";

import ROUTES from "../../../constants/routes";
import { Link } from "react-router-dom";

import { HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { useGetMovieSearchQuery } from "../../../store/api";
import { useSelector } from "react-redux";

interface IMovieSearch {
  id: number | string;
  title: string;
  poster_path: string;
  release_date: string;
}

const MovieSearch = () => {
  const searchValue = useSelector((state) => state.search);

  const {
    data: searchingMovies,
    error: searchingMoviesError,
    isLoading: searchingMoviesLoading,
  } = useGetMovieSearchQuery(searchValue);

  if (searchingMoviesError) {
    return (
      <ErrorMessage
        status={searchingMoviesError.status}
        message={searchingMoviesError.data.status_message}
      />
    );
  }

  if (searchingMoviesLoading) {
    return <Preloader />;
  }

  console.log(searchingMoviesLoading);

  if (searchingMovies && searchingMovies.results.length > 0) {
    return (
      <div className="grid grid-cols-10 gap-4">
        {searchingMovies.results.map((movie: IMovieSearch) => (
          <div
            key={movie.id}
            className="flex flex-col bg-zinc-800 rounded-md overflow-hidden cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="flex flex-col gap-2 p-2">
              <div className="flex justify-between">
                <button className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer">
                  <HeartIcon className="w-4 h-4 text-white" />
                </button>
                <Link
                  to={`${ROUTES.MOVIE}/${movie.id}`}
                  className="border border-white rounded-full p-1 opacity-80 hover:opacity-100"
                >
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </Link>
              </div>
              <h2 className="text-white text-base font-medium text-center">
                {movie.title}
              </h2>
              <p className="text-white text-xs text-center">
                {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <p className="text-white">Unfortunately, there are no such movies.</p>
      </div>
    );
  }
};

export default MovieSearch;
