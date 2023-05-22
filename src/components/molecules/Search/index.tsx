import React, { FC, useState, useRef } from "react";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Input from "../../atoms/Input";

interface ISearch {
  searchBarValue?: string | number;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({ searchBarValue, handleChange }) => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleToggle = () => {
    setToggleSearchBar(!toggleSearchBar);

    //clear input
    if (!toggleSearchBar) {
      handleChange?.({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleClear = () => {
    //clear input
    handleChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);

    //add focus after clearing
    if (searchInput.current) {
      searchInput.current.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    //close if outclick
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToggleSearchBar(false);
    }
  };

  return (
    <div
      tabIndex={0}
      className={`w-fit h-9 flex justify-between items-center gap-3 p-1 ${
        toggleSearchBar ? "border border-white transition-all duration-300" : ""
      }`}
      onBlur={handleBlur}
    >
      <MagnifyingGlassIcon
        className="max-w-[24px] w-full max-h-[24px] h-full text-white cursor-pointer"
        onClick={handleToggle}
      />
      {toggleSearchBar && (
        <>
          <Input
            type="search"
            name="search"
            value={searchBarValue}
            inputRef={searchInput}
            placeholder="Movie title"
            onChange={handleChange}
            variant="transparent"
            className="search-input"
            focus={true}
          />
          <XMarkIcon
            className="max-w-[24px] w-full max-h-[24px] h-full text-white cursor-pointer"
            onClick={handleClear}
          />
        </>
      )}
    </div>
  );
};

export default Search;
