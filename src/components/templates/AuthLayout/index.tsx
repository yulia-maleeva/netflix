import React, { FC, ReactNode } from "react";

import { Outlet } from "react-router-dom";

import Header from "~/components/organisms/Header";
import Footer from "~/components/organisms/Footer";

interface AuthLayout {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayout> = () => (
  <div className="px-7.5">
    <Header />
    <main className="my-12">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default AuthLayout;
