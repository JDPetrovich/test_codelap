import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Home from "./pages/Home"

export default function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("username")
  )

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={username ? "/home" : "/login"} />}
      />

      <Route
        path="/login"
        element={
          !username ? (
            <Login setUsername={setUsername} />
          ) : (
            <Navigate to="/home" />
          )
        }
      />

      <Route
        path="/home"
        element={
          username ? (
            <Home setUsername={setUsername} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  )
}