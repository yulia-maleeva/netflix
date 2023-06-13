import React, { FC, useState, useEffect } from "react";

import Search from "../../../components/molecules/Search";
import Select from "../../../components/molecules/Select";

import { genres } from "../../../constants/mockData";

const Home: FC = () => {
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
      <Search handleChange={handleChange} delay={2000} />
      <Select genres={genres} />
    </>
  );
};

export default Home;
