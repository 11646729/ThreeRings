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
// GET An api endpoint that returns a short list of items
// -------------------------------------------------------
// threeRingsRouter.get("/getList", (req, res) => {
//   console.log("Here")

//   const list = ["item1", "item2", "item3"]
//   res.json(list)
//   console.log("sent list of items")
// })

// -------------------------------------------------------
// Function to fetch all 3Rings Shift data
// -------------------------------------------------------
threeRingsRouter.get("/shifts", async (url) => {
  // Guard clause
  if (url == null) {
    console.log(
      "Error: url == null in get /shifts in threeRingsRouteCatalog.js"
    )
    return
  }

  try {
    let resultData = await axios({
      url: "https://www.3r.org.uk/stats/export_rotas.json",
      method: "GET",
      timeout: 8000,
      headers: {
        Authorization: process.env.REACT_APP_THREE_RINGS_API_KEY,
      },
    })

    return resultData.data
  } catch (error) {
    console.log(error)
  }
})

export default threeRingsRouter
