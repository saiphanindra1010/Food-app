import React from "react"
import ReactDOM from "react-dom/client"
const heading=React.createElement("h1",{id:"hello"},"hello using react")
const root=ReactDOM.createRoot(document.getElementById('root'))
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"h1-data"},"hello nested h1"),React.createElement("h2",{id:"h2-data"},"hello nested h2")]))
root.render(parent)