import ROUTES from "~/constants/routes";

interface INavLink {
  name: string;
  url: string;
}

export const navLinks: INavLink[] = [
  { name: "Home", url: ROUTES.HOME },
  { name: "Movies", url: ROUTES.MOVIES },
  { name: "New and popular", url: ROUTES.TRENDING },
  { name: "Favourites", url: ROUTES.FAVOURITES },
];

export default navLinks;
