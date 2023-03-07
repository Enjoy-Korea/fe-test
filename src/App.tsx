import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"

import HouseDetailPage from "./pages/HouseDetailPage"
import MainListPage from "./pages/MainListPage"

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainListPage} />
          <Route path="/houses/:id" component={HouseDetailPage} />
        </Switch>
      </div>
    </Suspense>
  )
}

export default App
