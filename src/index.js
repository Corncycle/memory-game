import "./stylesheets/meyer-reset.css"
import "./stylesheets/style.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { MemoryGame } from "./MemoryGame"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
)
