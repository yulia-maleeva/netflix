import React, { FC } from "react";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

interface IGenre {
  id: number | string;
  name: string;
}

interface ISelect {
  genres: IGenre[];
}

const Select: FC<ISelect> = ({ genres }) => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value;
    navigate(`${ROUTES.GENRE}${selectedGenre}`);
  };

  return (
    <select
      onChange={handleChange}
      className="bg-black text-white border border-white p-1"
    >
      <option hidden defaultValue="">
        Genres
      </option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
