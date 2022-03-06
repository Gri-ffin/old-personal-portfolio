import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import ParticleBackground from './components/Particles/Index'
import LoadingPage from './components/LoadingPage/Index'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Box w="100vw" h="50vh" bg="black">
      {isLoading ? <LoadingPage /> : <ParticleBackground />}
    </Box>
  )
}

export default App
