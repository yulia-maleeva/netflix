interface ISocial {
  name: string;
  url: string;
  icon: string;
}

const socials: ISocial[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/netflixua/?brand_redir=475822799216240",
    icon: "/public/assets/svg/facebook.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/Netflix/",
    icon: "/public/assets/svg/instagram.svg",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw",
    icon: "/public/assets/svg/youtube.svg",
  },
];

export default socials;
