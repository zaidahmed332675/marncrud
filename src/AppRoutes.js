import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Books from "./Pages/Books";
import Home from "./Pages/Home";
import CreateBook from "./Pages/CreateBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="create" element={<CreateBook />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
