import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import threeRingsRouter from "./threeRingsRouteCatalog.js"

const app = express()

dotenv.config()

const port = process.env.PORT || 8000

// cors settings from https://blog.jscrambler.com/setting-up-5-useful-middlewares-for-an-express-api/
app.use(
  cors({
    origin: ["http://localhost:" + port],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// Routes - An api endpoint that returns a short list of items
app.use("/backend", threeRingsRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
