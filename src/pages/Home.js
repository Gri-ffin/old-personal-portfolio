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
import { Card } from '../components/UI/Card'
import { Footer } from '../components/Footer'

const HomePage = () => {
  return (
    <Card>
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
            <Link to="/about">
              <Button
                bg={useColorModeValue('gray.100', 'black')}
                color={useColorModeValue('gray.900', 'white')}
                mt={5}
              >
                About me
              </Button>
            </Link>
          </Heading>
        </Section>
      </Container>
      <Box textAlign="center">
        <Footer />
      </Box>
    </Card>
  )
}

export default HomePage
