import React, { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import ROUTES from "../../../constants/routes";
import Navbar from "../../organisms/Navbar/Navbar";
import Search from "../../molecules/Search";

import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../store/slices/searchSlice";

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    dispatch(setSearchValue(value));
    navigate(ROUTES.MOVIE_SEARCH);
  };

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
        <Search handleChange={handleChange} delay={1000} />
      </header>
    </>
  );
};

export default Header;
