import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import ParticleBackground from '../components/Particles/Index'

const HomePage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={useColorModeValue('gray.500', 'gray.800')}
      color="white"
    >
      <ParticleBackground />
    </Box>
  )
}

export default HomePage
