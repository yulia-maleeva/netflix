import React, { FC, FocusEvent, useState, useRef, useEffect } from "react";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Input from "../../atoms/Input";

const Search: FC = () => {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchInput = useRef<HTMLInputElement | null>(null);

  const handleToggle = () => {
    setToggleSearchBar(!toggleSearchBar);
  };

  const handleClear = () => {
    if (searchInput.current) {
      searchInput.current.value = "";
      searchInput.current.focus();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setToggleSearchBar(false);
    }
  };

  useEffect(() => {
    if (searchInput.current) {
      searchInput.current.focus();
    }
  }, [toggleSearchBar]);

  return (
    <div
      tabIndex={0}
      onBlur={handleBlur}
      className={`h-10 flex justify-between items-center gap-3 ${
        toggleSearchBar
          ? "w-56 p-1 bg-black border border-white transition-all duration-300 "
          : "w-6"
      }`}
    >
      <MagnifyingGlassIcon
        className="min-w-fit min-h-fit bg-transparent text-white cursor-pointer"
        onClick={handleToggle}
      />
      <Input
        type="search"
        name="search"
        inputRef={searchInput}
        placeholder="Назва"
        variant="transparent"
        className="search-input"
      />
      <XMarkIcon
        className={
          toggleSearchBar
            ? "min-w-fit min-h-fit bg-transparent text-white cursor-pointer"
            : "w-0 h-0"
        }
        onClick={handleClear}
      />
    </div>
  );
};

export default Search;
