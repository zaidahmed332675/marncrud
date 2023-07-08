import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
