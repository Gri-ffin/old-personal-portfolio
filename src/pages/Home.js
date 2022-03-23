import React from 'react'
import { Button, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import ParticleBackground from '../components/Particles/Particles'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import { Section } from '../components/Section'
import { Card } from '../components/UI/Card'

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
            <Button
              bg={useColorModeValue('gray.100', 'black')}
              color={useColorModeValue('gray.900', 'white')}
              mt={5}
            >
              <Link to="/about"> About me</Link>
            </Button>
          </Heading>
        </Section>
      </Container>
    </Card>
  )
}

export default HomePage
