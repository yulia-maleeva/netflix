import React, { FC, useState } from "react";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export interface IMovieCard {
  id: number | string;
  title: string;
  poster: string;
  release: string;
}

const MovieCard: FC<IMovieCard> = ({ id, title, poster, release }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const navigate = useNavigate();

  const addToFavourites = () => {
    setIsFavourite(!isFavourite);

    //here will be the logic of adding to favourites
  };

  const openMovieDetails = () => {
    navigate(`${ROUTES.MOVIE}${id}`);
  };

  return (
    <div className="relative max-w-[150px] max-h-[300px]">
      <img src={poster} alt={title} className="rounded-md" />
      <div className="group absolute top-0 opacity-0 flex flex-col gap-1 rounded-b-md bg-zinc-800 transition cursor-pointer hover:opacity-100 hover:scale-125">
        <img src={poster} alt={title} className="rounded-t-md" />
        <div className="hidden group-hover:flex flex-col gap-2 p-2 group-hover:cursor-default">
          <div className="flex justify-between">
            <span
              onClick={addToFavourites}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <HeartIcon
                className={`w-3 h-3 text-white ${
                  isFavourite ? "fill-white" : ""
                }`}
              />
            </span>
            <span
              onClick={openMovieDetails}
              className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
            >
              <ArrowRightIcon className="w-3 h-3 text-white" />
            </span>
          </div>
          <div>
            <h2 className="text-white text-[10px] font-medium">{title}</h2>
            <p className="text-white text-[8px]">{release}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
