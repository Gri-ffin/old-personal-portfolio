import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
const AboutPage = React.lazy(() => import('./pages/About'))
const HomePage = React.lazy(() => import('./pages/Home'))
const ProjectsPage = React.lazy(() => import('./pages/Projects'))
import LoadingSpinner from './components/LoadingSpinner'
import Page404 from './pages/404Page'
import ClassroomChatPage from './pages/Projects/classroom-chat'

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects">
            <Route path="classroom-chat" element={<ClassroomChatPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
