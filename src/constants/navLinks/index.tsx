import ROUTES from "../routes";

interface INavLink {
  name: string;
  url: keyof typeof ROUTES;
}

export const navLinks: INavLink[] = [
  { name: "Головна", url: "HOME" },
  { name: "Фільми", url: "MOVIES" },
  { name: "Новинки й популярне", url: "TRENDING" },
  { name: "Улюблене", url: "FAVOURITES" },
];

export default navLinks;
