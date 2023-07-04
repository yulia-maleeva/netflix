import React, { FC } from "react";

import { useParams } from "react-router-dom";

const Genre: FC = () => {
  const { id } = useParams();

  return <p className="text-white">Genre id: {id}</p>;
};

export default Genre;
