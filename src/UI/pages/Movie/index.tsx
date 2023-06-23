import React, { FC } from "react";

import { useParams } from "react-router-dom";

import { useGetMovieQuery } from "../../../store/api";

const Movie: FC = () => {
  const params = useParams();
  console.log(params.id);
  const id = params.id?.replace(":id", "");

  const { data: movie, error, isLoading } = useGetMovieQuery(id);

  return (
    <div>
      {error && <p className="text-red-500">Error!</p>}
      {isLoading && <p className="text-red-500">Loading...</p>}

      {movie && (
        <>
          <h1 className="text-white">{movie.title}</h1>
          <p className="text-white">{movie.release_dare}</p>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p className="text-white">{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default Movie;
