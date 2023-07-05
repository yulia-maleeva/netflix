import React, { FC } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import { TrashIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import {
  useGetFavouriteMoviesQuery,
  useRemoveFromFavouritesMutation,
} from "../../../store/api";

export interface IFavouriteMovie {
  id: number | string;
  title: string;
  poster_path: string;
  release_date: string;
}

const Favourites: FC = () => {
  const { data: favouriteMovies, refetch } = useGetFavouriteMoviesQuery();

  const [removeFromFavorites] = useRemoveFromFavouritesMutation();

  const handleRemoveFromFavourites = async (id: number | string) => {
    await removeFromFavorites(id);
    refetch();
  };

  return (
    <div>
      <p className="text-xl font-medium text-white my-3">Favourites</p>
      {favouriteMovies && favouriteMovies.results.length > 0 ? (
        <div className="grid grid-cols-6 gap-4">
          {favouriteMovies.results.map((movie: IFavouriteMovie) => (
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
                  <button
                    onClick={() => handleRemoveFromFavourites(movie.id)}
                    className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
                  >
                    <TrashIcon className="w-4 h-4 text-white" />
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
      ) : (
        <div>
          <p className="text-white">No favorite movies yet</p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
