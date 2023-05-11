import React, { FC, useState, useEffect, useRef } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search: FC = () => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  const handleBlur = () => {
    setToggleSearchBar(false);
  };

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [toggleSearchBar]);

  return (
    <div
      className={`h-10 flex justify-between items-center gap-3 pl-1 ${
        toggleSearchBar
          ? "w-56 bg-black border border-white transition-all duration-300 "
          : "w-6"
      }`}
    >
      <MagnifyingGlassIcon
        className="min-w-fit min-h-fit bg-transparent text-white cursor-pointer"
        onClick={handleClick}
      />
      <input
        type="search"
        placeholder="Назва"
        ref={searchInput}
        className={
          toggleSearchBar
            ? "w-full h-full bg-transparent text-white outline-none"
            : "w-0 h-0"
        }
        onBlur={handleBlur}
      ></input>
    </div>
  );
};

export default Search;
