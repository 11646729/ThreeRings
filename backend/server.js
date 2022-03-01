import express from "express" //Line 1

const app = express()

const port = process.env.PORT || 8000 //Line 3

// middleware for allowing react to fetch() from server
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS")
  next()
})

// An api endpoint that returns a short list of items
app.get("/backend/getList", (req, res) => {
  const list = ["item1", "item2", "item3"]
  res.json(list)
  console.log("sent list of items")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
