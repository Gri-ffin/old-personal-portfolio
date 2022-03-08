import React from 'react'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import ParticleBackground from '../components/Particles/Index'
import Typewriter from 'typewriter-effect'

const HomePage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={useColorModeValue('gray.500', 'gray.800')}
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    >
      <ParticleBackground />
      <Container
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" align="center">
          Hello, I&apos;m Yassine Tadlaoui, I&apos;m a
          <Typewriter
            options={{
              strings: ['Developer.', 'Code enthusiast.', 'Gamer.'],
              autoStart: true,
              delay: 'natural',
              deleteSpeed: 'natural',
              loop: true
            }}
          />
        </Heading>
      </Container>
    </Box>
  )
}

export default HomePage
