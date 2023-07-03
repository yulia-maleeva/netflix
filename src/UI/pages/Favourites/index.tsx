import React, { FC } from "react";

import { TrashIcon } from "@heroicons/react/24/outline";

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
        <div className="grid grid-cols-8 gap-4">
          {favouriteMovies.results.map((movie: IFavouriteMovie) => (
            <div
              key={movie.id}
              className="max-w-[150px] flex flex-col items-center bg-zinc-800 rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="text-white">{movie.title}</p>
              <p className="text-white">{movie.release_date}</p>
              <button
                onClick={() => handleRemoveFromFavourites(movie.id)}
                className="border border-white rounded-full p-1 opacity-80 hover:opacity-100 cursor-pointer"
              >
                <TrashIcon className="w-3 h-3 text-white" />
              </button>
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
