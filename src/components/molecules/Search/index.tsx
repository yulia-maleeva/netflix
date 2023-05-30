import React, { FC, useState, RefObject } from "react";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Input from "../../atoms/Input";

interface ISearch {
  searchBarValue?: string | number;
  inputRef?: RefObject<HTMLInputElement>;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear?: (() => void) | undefined;
}

const Search: FC<ISearch> = ({
  searchBarValue,
  inputRef,
  handleChange,
  handleClear,
}) => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const handleToggle = () => {
    setToggleSearchBar(!toggleSearchBar);

    if (handleClear) {
      handleClear();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
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
            ref={inputRef}
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
