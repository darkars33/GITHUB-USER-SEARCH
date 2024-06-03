import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./Home"

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

// https://api.github.com/users/${name}
