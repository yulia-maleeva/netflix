import React, { FC, useState } from "react";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import { HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { useAddToFavouritesMutation } from "~/store/api";

export interface IMovieCard {
  id: number | string;
  title: string;
  poster_path: string;
  release_date: string;
}

const MovieCard: FC<IMovieCard> = ({
  id,
  title,
  poster_path,
  release_date,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [addToFavourites] = useAddToFavouritesMutation();

  const handleAddToFavourites = async () => {
    setIsFavourite(true);
    await addToFavourites(id);
  };

  return (
    <div className="relative max-w-[150px] max-h-[300px]">
      <img src={poster_path} alt={title} className="rounded-md" />
      <div className="group absolute top-0 opacity-0 flex flex-col gap-1 rounded-b-md bg-zinc-800 transition cursor-pointer hover:opacity-100 hover:scale-125">
        <img src={poster_path} alt={title} className="rounded-t-md" />
        <div className="hidden group-hover:flex flex-col gap-2 p-2 group-hover:cursor-default">
          <div className="flex justify-between">
            <button
              onClick={handleAddToFavourites}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <HeartIcon
                className={`w-3 h-3 text-white ${
                  isFavourite ? "fill-white" : ""
                }`}
              />
            </button>
            <Link
              to={`${ROUTES.MOVIE}/${id}`}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100"
            >
              <ArrowRightIcon className="w-3 h-3 text-white" />
            </Link>
          </div>
          <div>
            <h2 className="text-white text-xxs font-medium">{title}</h2>
            <p className="text-white text-xxxs">{release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
