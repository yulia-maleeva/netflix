import React, { FC, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "../../../constants/routes";

import Navbar from "../../organisms/Navbar/Navbar";
import Search from "../../molecules/Search";

interface IMainTemplate {
  children: React.ReactNode;
}

const MainTemplate: FC<IMainTemplate> = ({ children }) => {
  const [searchBarValue, setSearchBarValue] = useState("");

  const fakeApiCall = (searchBarValue: string) => {
    console.log(searchBarValue);
  };

  const handleChange = (value: string) => {
    setSearchBarValue(value);
  };

  useEffect(() => {
    fakeApiCall(searchBarValue);
  }, [searchBarValue]);

  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-[100px]">
          <Link to={ROUTES.HOME}>
            <img
              src="/public/assets/svg/logo.svg"
              alt="Logo"
              className="w-[100px]"
            />
          </Link>
          <Navbar />
        </div>
        <Search handleChange={handleChange} delay={2000} />
      </header>
      <main>{children}</main>
      <footer>
        <p className="text-green-400">Footer</p>
      </footer>
    </>
  );
};

export default MainTemplate;
