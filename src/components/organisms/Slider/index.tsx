import React, { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import MovieCard, { IMovieCard } from "../MovieCard";

import "swiper/css";
import "swiper/css/navigation";

export interface ISlider {
  moviesList: IMovieCard[];
}

const Slider: FC<ISlider> = ({ moviesList }) => (
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    breakpoints={{
      320: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 7,
      },
      1280: {
        slidesPerView: 10,
      },
    }}
    className="overflow-visible mb-20"
  >
    {moviesList.map((movie) => (
      <SwiperSlide key={movie.id} className="flex justify-center hover:z-50">
        <MovieCard
          id={movie.id}
          title={movie.title}
          poster_path={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          release_date={movie.release_date}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
