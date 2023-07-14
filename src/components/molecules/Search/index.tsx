import React, { FC, useState, useRef } from "react";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Input from "~/components/atoms/Input";

interface ISearch {
  handleChange: (value: string) => void;
  delay?: number;
}

const Search: FC<ISearch> = ({ handleChange, delay = 0 }) => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [timer, setTimer] = useState<number | undefined>(undefined);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setToggleSearchBar(!toggleSearchBar);

    handleClear();
  };

  const handleClear = () => {
    setSearchBarValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToggleSearchBar(false);
    }
  };

  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);

    setSearchBarValue(e.target.value);

    setTimer(
      setTimeout(() => {
        handleChange(e.target.value);
      }, delay)
    );
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
            onChange={handleDelayChange}
            variant="transparent"
            className="search-input"
            autoFocus={true}
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
