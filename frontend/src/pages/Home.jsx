import React from "react"
import { Link } from "react-router-dom"
// import Navbar from "../components/Navbar"
// import ThreeRingsPage from "./ThreeRingsPage"

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h1>Project Home</h1>
      {/** Link to List.js */}
      <Link to={"./list"}>
        <button>My List</button>
      </Link>
      {/* <ThreeRingsPage /> */}
    </div>
  )
}

export default Home
