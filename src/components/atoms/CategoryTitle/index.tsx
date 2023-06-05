import React, { FC } from "react";

interface ICategoryTitle {
  categoryTitle: string;
}

const CategoryTitle: FC<ICategoryTitle> = ({ categoryTitle }) => (
  <p className="text-xl font-medium text-white my-3">{categoryTitle}</p>
);

export default CategoryTitle;
