import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

import "./fonts/Varah-Bold.otf"
import "./fonts/Varah-BoldItalic.otf"
import "./fonts/Varah-Italic.otf"
import "./fonts/Varah-Regular.otf"

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
