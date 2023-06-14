import React, { FC } from "react";

import { Link } from "react-router-dom";

import navLinks from "../../../constants/navLinks";

const Navbar: FC = () => (
  <nav>
    <ul className="flex justify-between items-center gap-5 font-medium text-white">
      {navLinks.map((navLink) => (
        <li key={navLink.name}>
          <Link to={navLink.url} className="hover:opacity-80">
            {navLink.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
