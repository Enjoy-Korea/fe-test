import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainListPage from "../pages/MainListPage";
import ItemDetailPage from "../pages/ItemDetailPage";
import houseInfo from "../data/houses.mock.json";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainListPage />} />
        <Route
          path="/item/:id"
          element={<ItemDetailPage houseInfo={houseInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
