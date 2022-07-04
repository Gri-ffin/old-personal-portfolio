import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Section } from '../Section'
import { Paragraph } from '../Paragraph'

export function AboutMe() {
  return (
    <Container
      display="flex"
      justifyContent="left"
      alignItems="center"
      mt={{ base: 56, xs: 0 }}
    >
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          18 years old, I&apos;m currently second year college student studying
          computer science, very passionate about coding in general, I find the
          idea of turning lines of code into very beautiful things very
          charming. And whenever possible, I also apply my passion for
          developing Side Projects with Node.js and Modern Javascript Library
          and Frameworks like React.js and Next.js.
        </Paragraph>
      </Section>
    </Container>
  )
}
