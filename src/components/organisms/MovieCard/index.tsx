import React, { FC } from "react";

interface IMovieCard {
  poster: string;
  title: string;
}

const MovieCard: FC<IMovieCard> = ({ poster, title }) => {
  return (
    <>
      <img
        src={poster}
        alt={title}
        className="w-full h-full bg-yellow-300 cursor-pointer"
      />
    </>
  );
};

export default MovieCard;
