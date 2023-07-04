import React, { FC } from "react";

import { RotatingLines } from "react-loader-spinner";

const Preloader: FC = () => (
  <div className="h-40 flex justify-center items-center">
    <div className="flex justify-center items-center gap-2">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export default Preloader;
