import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainListPage } from "./pages/MainListPage";
import { ListItemDetailPage } from "./pages/ListItemDetailPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainListPage />} />
      <Route path="/house/:houseId" element={<ListItemDetailPage />} />
    </Routes>
  );
};
