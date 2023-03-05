import React, { Suspense } from "react";

import HouseDetailPage from "./pages/HouseDetailPage";
import MainListPage from "./pages/MainListPage";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="App">
        {/* <MainListPage /> */}
        <HouseDetailPage />
      </div>
    </Suspense>
  );
}

export default App;
