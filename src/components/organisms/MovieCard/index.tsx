import React, { FC, useState } from "react";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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

  const navigate = useNavigate();

  const addToFavourites = () => {
    setIsFavourite(!isFavourite);

    //here will be the logic of adding to favourites
  };

  const openMovieDetails = () => {
    navigate(`${ROUTES.MOVIE}${id}`);
  };

  console.log(`${ROUTES.MOVIE}?${id}`);

  return (
    <div className="relative max-w-[150px] max-h-[300px]">
      <img src={poster_path} alt={title} className="rounded-md" />
      <div className="group absolute top-0 opacity-0 flex flex-col gap-1 rounded-b-md bg-zinc-800 transition cursor-pointer hover:opacity-100 hover:scale-125">
        <img src={poster_path} alt={title} className="rounded-t-md" />
        <div className="hidden group-hover:flex flex-col gap-2 p-2 group-hover:cursor-default">
          <div className="flex justify-between">
            <button
              onClick={addToFavourites}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <HeartIcon
                className={`w-3 h-3 text-white ${
                  isFavourite ? "fill-white" : ""
                }`}
              />
            </button>
            <button
              onClick={openMovieDetails}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <ArrowRightIcon className="w-3 h-3 text-white" />
            </button>
          </div>
          <div>
            <h2 className="text-white text-xxs font-medium">{title}</h2>
            <p className="text-white text-[8px]">{release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
