import React, { FC, useState } from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import Preloader from "~/components/atoms/Preloader";
import ErrorMessage from "~/components/atoms/ErrorMessage";

import movieTypes from "~/constants/movieTypes";

import { HeartIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { useGetMoviesByTypeQuery } from "~/store/api";

interface IMovies {
  id: number | string;
  title: string;
  poster_path: string;
  release_date: string;
  total_pages: number | string;
}

const Movies: FC = () => {
  const defaultType = "popular";

  const { type } = useParams();

  const [moviesType, setMoviesType] = useState(type || defaultType);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isFetching } = useGetMoviesByTypeQuery({
    type: moviesType,
    page: currentPage,
  });

  if (error) {
    return (
      <ErrorMessage status={error.status} message={error.data.status_message} />
    );
  }

  if (isLoading || isFetching) {
    return <Preloader />;
  }

  const handleClick = (selectedType: string) => {
    setMoviesType(selectedType);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex gap-10">
        <div className="w-[15%] flex flex-col gap-6">
          <div>
            <p className="text-lg font-medium text-white mb-5">
              Choose the type:
            </p>
            <ul className="flex flex-col gap-2 text-white">
              {movieTypes.map((movieType) => (
                <li
                  key={movieType.name}
                  onClick={() => handleClick(movieType.type)}
                >
                  <button
                    className={
                      moviesType === movieType.type
                        ? "text-red-650 font-medium"
                        : ""
                    }
                  >
                    {movieType.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-medium text-white mb-5">
              Choose the genre:
            </p>
            <ul className="flex flex-col gap-2 text-white">
              <li>Genre 1</li>
              <li>Genre 2</li>
              <li>Genre 3</li>
              <li>Genre 4</li>
              <li>Genre 5</li>
              <li>Genre 6</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-5">
          {data && data.results.length > 0 ? (
            <>
              <div className="grid grid-cols-10 gap-4">
                {data.results.map((movie: IMovies) => (
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
              <div className="text-white">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &lt;
                </button>
                ...
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === data.total_pages}
                >
                  &gt;
                </button>
              </div>
            </>
          ) : (
            <div>
              <p className="text-white">Oops! Something went wrong!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Movies;
