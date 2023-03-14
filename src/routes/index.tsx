import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainListPage from "../pages/MainListPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
