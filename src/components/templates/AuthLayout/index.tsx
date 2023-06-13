import React, { FC, ReactNode } from "react";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => (
  <div className="px-7.5">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default AuthLayout;
