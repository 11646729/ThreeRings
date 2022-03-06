import React from "react"
import { Route, Routes } from "react-router-dom"
import ThreeRingsPage from "./pages/ThreeRingsPage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="*" element={<ThreeRingsPage />} />
      </Routes>
    </div>
  )
}

export default App
