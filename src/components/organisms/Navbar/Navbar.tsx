import React, { FC } from "react";

const Navbar: FC = () => (
  <nav>
    <ul className="flex justify-between items-center gap-5 font-medium text-white">
      <li className="cursor-pointer hover:opacity-80">Головна</li>
      <li className="cursor-pointer hover:opacity-80">Фільми</li>
      <li className="cursor-pointer hover:opacity-80">Новинки й популярне</li>
      <li className="cursor-pointer hover:opacity-80">Улюблене</li>
    </ul>
  </nav>
);

export default Navbar;
