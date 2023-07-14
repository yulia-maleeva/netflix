import React, { FC, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import ROUTES from "~/constants/routes";

import Navbar from "~/components/organisms/Navbar";
import Search from "~/components/molecules/Search";

const Header: FC = () => {
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
        <div className="flex items-center gap-25">
          <Link to={ROUTES.HOME}>
            <img
              src="/public/assets/svg/logo.svg"
              alt="Logo"
              className="w-25"
            />
          </Link>
          <Navbar />
        </div>
        <Search handleChange={handleChange} delay={2000} />
      </header>
    </>
  );
};
export default Header;
