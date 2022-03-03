import express from "express"
var threeRingsRouter = express.Router()

// -------------------------------------------------------
// GET Three Rings Catalogue home page
// -------------------------------------------------------
// threeRingsRouter.get("/", console.log("Default"))

// -------------------------------------------------------
// GET An api endpoint that returns a short list of items
// -------------------------------------------------------
threeRingsRouter.get("/getList", (req, res) => {
  console.log("Here")

  const list = ["item1", "item2", "item3"]
  res.json(list)
  console.log("sent list of items")
})

export default threeRingsRouter
