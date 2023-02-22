import React from "react";
import { Route, Routes } from "react-router-dom";

import MainListPage from "../components/MainListPage";
import ListItemDetailPage from "../components/ListItemDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainListPage />} />
        <Route path="/:id" element={<ListItemDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
