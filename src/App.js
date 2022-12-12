import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
const AboutPage = React.lazy(() => import('./pages/About'))
const HomePage = React.lazy(() => import('./pages/Home'))
const ProjectsPage = React.lazy(() => import('./pages/Projects'))
import LoadingSpinner from './components/LoadingSpinner'
import Page404 from './pages/404Page'
import ClassroomChatPage from './pages/Projects/classroom-chat'
import TechsPage from './pages/Projects/techs'
import SpotifyClonePage from './pages/Projects/spotify-clone'
import MangaReaderPage from './pages/Projects/manga-reader'

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
            <Route path="techs" element={<TechsPage />} />
            <Route path="spotify-clone" element={<SpotifyClonePage />} />
            <Route path="manga-reader" element={<MangaReaderPage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
