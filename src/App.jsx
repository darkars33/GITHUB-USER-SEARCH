import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import User from "./User"

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

// https://api.github.com/users/${name}
