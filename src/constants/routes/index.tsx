interface IRoutes {
  LOGIN: string;
  HOME: string;
  MOVIES: string;
  TRENDING: string;
  MOVIE: string;
  USER_PROFILE: string;
  FAVOURITES: string;
}

const ROUTES: IRoutes = {
  LOGIN: "/login",
  HOME: "/",
  MOVIES: "/movies",
  TRENDING: "/trending",
  MOVIE: "/movie",
  USER_PROFILE: "/user-profile",
  FAVOURITES: "/favourites",
};

export default ROUTES;
