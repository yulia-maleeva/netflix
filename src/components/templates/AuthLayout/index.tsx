import React, { FC, ReactNode } from "react";

import { Outlet } from "react-router-dom";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

interface AuthLayout {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayout> = () => (
  <div className="px-7.5">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AuthLayout;
