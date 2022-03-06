import express from "express"
import axios from "axios"

var threeRingsRouter = express.Router()

// -------------------------------------------------------
// GET Three Rings Catalogue home page
// -------------------------------------------------------
threeRingsRouter.get("/", () => {
  console.log("Default")
})

// -------------------------------------------------------
// Function to fetch all 3Rings Shift data
// -------------------------------------------------------
threeRingsRouter.get("/shifts", async (req, res) => {
  try {
    let resultData = await axios({
      url: "https://www.3r.org.uk/stats/export_rotas.json",
      method: "GET",
      timeout: 8000,
      headers: {
        Authorization: process.env.REACT_APP_THREE_RINGS_API_KEY,
      },
    })

    res.send(resultData.data)
  } catch (error) {
    console.log(error)
  }
})

// -------------------------------------------------------
// Function to fetch all 3Rings News data
// -------------------------------------------------------
threeRingsRouter.get("/news", async (req, res) => {
  try {
    let resultData = await axios({
      url: "http://www.3r.org.uk/news.json",
      method: "GET",
      timeout: 8000,
      headers: {
        Authorization: process.env.REACT_APP_THREE_RINGS_API_KEY,
      },
    })

    res.send(resultData.data)
  } catch (error) {
    console.log(error)
  }
})

// -------------------------------------------------------
// Function to fetch all 3Rings Events data
// -------------------------------------------------------
threeRingsRouter.get("/events", async (req, res) => {
  try {
    let resultData = await axios({
      url: "https://www.3r.org.uk/events.json",
      method: "GET",
      timeout: 8000,
      headers: {
        Authorization: process.env.REACT_APP_THREE_RINGS_API_KEY,
      },
    })

    res.send(resultData.data)
  } catch (error) {
    console.log(error)
  }
})

export default threeRingsRouter
