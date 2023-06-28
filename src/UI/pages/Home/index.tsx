import React, { FC } from "react";

import PopularMovies from "../../../components/organisms/PopularMovies";
import TopRatedMovies from "../../../components/organisms/TopRatedMovies";
import UpcomingMovies from "../../../components/organisms/UpcomingMovies";

const Home: FC = () => {
  return (
    <>
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </>
  );
};

export default Home;
