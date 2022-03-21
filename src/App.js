import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
const AboutPage = React.lazy(() => import('./pages/About'))
const HomePage = React.lazy(() => import('./pages/Home'))
import LoadingSpinner from './components/LoadingSpinner'
import ProjectsPage from './pages/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
