import React, { FC } from "react";

import ROUTES from "~/constants/routes";
import { Link } from "react-router-dom";

import socials from "~/constants/socials";

const Footer: FC = () => (
  <footer className="flex flex-col gap-8">
    <div className="flex">
      <div className="flex flex-1 items-center gap-4">
        {socials.map((social) => (
          <a href={social.url} target="_blank" key={social.name}>
            <img
              src={social.icon}
              alt={social.name}
              className="hover:opacity-80"
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center flex-1 text-white">
        <Link to={ROUTES.ABOUT} className="opacity-80 hover:opacity-100">
          About Us
        </Link>
        <Link
          to={ROUTES.PRIVACY_POLICY}
          className="opacity-80 hover:opacity-100"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col items-end flex-1 text-white">
        <Link to={ROUTES.TERMS_OF_USE} className="opacity-80 hover:opacity-100">
          Terms of Use
        </Link>
        <Link to={ROUTES.COOKIES} className="opacity-80 hover:opacity-100">
          Cookies
        </Link>
      </div>
    </div>
    <p className="text-xs text-center text-white opacity-80 pb-10">
      Website developed by{" "}
      <a
        href="https://github.com/yulia-maleeva/netflix"
        target="_blank"
        className="underline decoration-1 hover:opacity-100"
      >
        Yulia Maleeva
      </a>
      <br />© 2023
    </p>
  </footer>
);

export default Footer;
