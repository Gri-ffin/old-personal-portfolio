import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Index'
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
