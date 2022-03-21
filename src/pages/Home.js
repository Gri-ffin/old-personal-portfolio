import React from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import ParticleBackground from '../components/Particles/Particles'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import { Section } from '../components/Section'

const HomePage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={useColorModeValue('whiteAlpha.400', 'gray.800')}
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
    >
      <ParticleBackground />
      <Container
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Section delay={0.2}>
          <Heading as="h1" align="center">
            Hello, I&apos;m Yassine Tadlaoui, I&apos;m a
            <Typewriter
              options={{
                strings: ['Developer.', 'Code enthusiast.', 'Fast learner.'],
                autoStart: true,
                delay: 'natural',
                deleteSpeed: 'natural',
                loop: true
              }}
            />
            <Button
              bg={useColorModeValue('white', 'black')}
              color={useColorModeValue('gray.900', 'white')}
              mt={5}
            >
              <Link to="/about"> About me</Link>
            </Button>
          </Heading>
        </Section>
      </Container>
    </Box>
  )
}

export default HomePage
