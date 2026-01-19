import React from "react"
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom"
import Home from "./view/Home"
import Navbar from "./components/ui/Navbar"
import Projets from "./view/Projets"
import Skills from "./view/Skills"
import Tableau from "./view/Tableau"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Acceuil" replace />} />
        <Route element={<LayoutNavbar />}>
        <Route path="/Acceuil" element={<Home />} />
        <Route path="/Competences" element={<Skills />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/tableau" element={<Tableau />} />
        </Route>
      </Routes>
    </Router>
  )
}

const LayoutNavbar: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
