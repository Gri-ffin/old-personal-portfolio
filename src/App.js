import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Index'
import AboutPage from './pages/About'
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
