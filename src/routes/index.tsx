import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainList from "../components/MainList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainList />} />
      </Routes>
    </BrowserRouter>
  );
}
