import React, { FC, useState, useRef } from "react";

import Search from "../../../components/molecules/Search";

const Home: FC = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const inputRef = useRef<HTMLInputElement>(null);

  const fakeApiCall = (searchBarValue: string | number) => {
    console.log(searchBarValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      fakeApiCall(searchBarValue);
    }, 2000);

    setTimer(newTimer);
  };

  const handleClear = () => {
    setSearchBarValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Search
        searchBarValue={searchBarValue}
        inputRef={inputRef}
        handleChange={handleChange}
        handleClear={handleClear}
      />
    </>
  );
};

export default Home;
