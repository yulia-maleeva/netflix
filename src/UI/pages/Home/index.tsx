import React, { FC } from "react";

import {
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../../../constants/mockData";

import Slider from "../../../components/organisms/Slider";
import CategoryTitle from "../../../components/atoms/CategoryTitle";

const Home: FC = () => (
  <>
    <section>
      <CategoryTitle categoryTitle="Popular" />
      <Slider moviesList={popularMovies} />
    </section>

    <section>
      <CategoryTitle categoryTitle="Top Rated" />
      <Slider moviesList={topRatedMovies} />
    </section>

    <section>
      <CategoryTitle categoryTitle="Upcoming" />
      <Slider moviesList={upcomingMovies} />
    </section>
  </>
);

export default Home;
