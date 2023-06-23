import React, { FC, ReactNode } from "react";

interface INonAuthLayout {
  children: ReactNode;
}

const NonAuthLayout: FC<INonAuthLayout> = ({ children }) => {
  return (
    <>
      <div className="relative bg-main-image bg-cover bg-center w-screen h-screen brightness-40" />
      <div className="absolute inset-0">{children}</div>
    </>
  );
};

export default NonAuthLayout;
