import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainListPage } from "./pages/Item/MainListPage";
import { ListItemDetailPage } from "./pages/Item/ListItemDetailPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainListPage />} />
      <Route path="/house/:houseId" element={<ListItemDetailPage />} />
    </Routes>
  );
};
