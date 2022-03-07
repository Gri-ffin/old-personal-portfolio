import React from 'react'
import { Box } from '@chakra-ui/react'
import ParticleBackground from '../components/Particles/Index'

const HomePage = () => {
  return (
    <Box w="100vw" h="100vh" bg={'gray.900'} color="white">
      <ParticleBackground />
    </Box>
  )
}

export default HomePage
