import React, { FC } from "react";

import Preloader from "../../../components/atoms/Preloader";
import ErrorMessage from "../../../components/atoms/ErrorMessage";

import { useParams } from "react-router-dom";

import { useGetMovieQuery } from "../../../store/api";

const Movie: FC = () => {
  const { id } = useParams();

  const {
    data: movie,
    error: movieError,
    isLoading: movieLoading,
  } = useGetMovieQuery(id);

  return (
    <>
      {movieError ? (
        <ErrorMessage
          status={movieError.status}
          message={movieError.data.status_message}
        />
      ) : null}
      {movieLoading ? <Preloader /> : null}
      {movie ? (
        <div className="relative w-full h-100">
          <div
            className="absolute inset-0 bg-main-image bg-cover bg-no-repeat bg-center brightness-40"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${
                movie?.backdrop_path || ""
              })`,
            }}
          ></div>
          <div className="absolute inset-0 flex gap-8 p-5 text-white">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-auto h-auto rounded"
            />
            <div className="flex flex-col gap-8 text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-extrabold">{movie.title}</h1>
                <p className="text-xl font-bold">{movie.tagline}</p>
                <p className="text-lg font-semibold">
                  Runtime: {movie.runtime} min
                </p>
              </div>
              <p className="text-base">
                <b>Overview: </b>
                <br />
                {movie.overview}
              </p>
              <p className="text-base">Release date: {movie.release_date}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Movie;
