import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import tagNames from "~/constants/tagNames";

import { IMovieCard } from "~/components/organisms/MovieCard";
import { IFavouriteMovie } from "~/UI/pages/Favourites";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDdmMmQ0OTAwZGFlNzUzYmZhODM2ZmQ3NTcwMDc2MCIsInN1YiI6IjY0NThiZGIxNzdkMjNiMDE1MzkzYmQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hEBwi2m70WbJEsi6BhwAx9z8KIwB0ThAVQx_6q9VgYI";
const BASE_URL = "https://api.themoviedb.org/3/";
const ACCOUNT_ID = "19378366";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  tagTypes: [tagNames.favourites],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${ACCESS_TOKEN}`);
      headers.set("accept", `application/json`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<IMovieCard[], void>({
      query: () => ({
        url: `movie/popular`,
      }),
    }),
    getTopRatedMovies: builder.query<IMovieCard[], void>({
      query: () => ({
        url: `movie/top_rated`,
      }),
    }),
    getUpcomingMovies: builder.query<IMovieCard[], void>({
      query: () => ({
        url: `movie/upcoming`,
      }),
    }),
    getMovie: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
      }),
    }),
    getFavouriteMovies: builder.query<IFavouriteMovie[], void>({
      query: () => ({
        url: `account/${ACCOUNT_ID}/favorite/movies`,
      }),
      providesTags: [tagNames.favourites],
    }),
    addToFavourites: builder.mutation<IFavouriteMovie, number | string>({
      query: (id) => ({
        url: `account/${ACCOUNT_ID}/favorite`,
        method: "POST",
        body: {
          media_type: "movie",
          media_id: id,
          favorite: true,
        },
      }),
      invalidatesTags: [tagNames.favourites],
    }),
    removeFromFavourites: builder.mutation<IFavouriteMovie, number | string>({
      query: (id) => ({
        url: `account/${ACCOUNT_ID}/favorite`,
        method: "POST",
        body: {
          media_type: "movie",
          media_id: id,
          favorite: false,
        },
      }),
      invalidatesTags: [tagNames.favourites],
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetMovieQuery,
  useGetFavouriteMoviesQuery,
  useAddToFavouritesMutation,
  useRemoveFromFavouritesMutation,
} = tmdbApi;
