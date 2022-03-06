import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import ParticleBackground from './components/Particles/Index'
import LoadingPage from './components/LoadingPage/Index'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoading = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    window.addEventListener('load', handleLoading)
    return () => window.removeEventListener('load', handleLoading)
  }, [])

  return (
    <Box w="100vw" h="100vh" bg={'gray.900'} color="white">
      {!isLoading ? <ParticleBackground /> : <LoadingPage />}
    </Box>
  )
}

export default App
