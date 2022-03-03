import React from "react"
import { Link } from "react-router-dom"
import ThreeRingsPage from "./ThreeRingsPage"

const Home = () => {
  return (
    <div>
      <h1>Project Home</h1>
      <Link to={"./list"}>
        <button>My List</button>
      </Link>
      {/* <ThreeRingsPage /> */}
    </div>
  )
}

export default Home
