import React, { FC, useState, useEffect } from "react";

import Search from "../../../components/molecules/Search";

const Home: FC = () => {
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
  };

  const fakeApiCall = () => {
    console.log(searchBarValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fakeApiCall();
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchBarValue]);

  return (
    <>
      <Search searchBarValue={searchBarValue} handleChange={handleChange} />
    </>
  );
};

export default Home;
