import React, { FC } from "react";

import MainTemplate from "../../../components/templates/MainTemplate";

const NotFound: FC = () => {
  return (
    <>
      <MainTemplate>
        <p className="text-green-400">Not Found</p>
      </MainTemplate>
    </>
  );
};

export default NotFound;
