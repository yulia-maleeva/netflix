interface IMovieType {
  name: string;
  type: string;
}

const movieTypes: IMovieType[] = [
  { name: "Popular", type: "popular" },
  { name: "Top Rated", type: "top_rated" },
  { name: "Upcoming", type: "upcoming" },
];

export default movieTypes;
