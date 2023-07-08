import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Books from "./Pages/Books";
import Home from "./Pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
