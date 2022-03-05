import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"
// import ThreeRingsPage from "./pages/ThreeRingsPage"

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<ThreeRingsPage />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/list" element={<List />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
