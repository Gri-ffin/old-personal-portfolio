import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Section } from '../Section'
import { Paragraph } from '../Paragraph'

export function WhatILove() {
  return (
    <Container display="flex" justifyContent="left" alignItems="center">
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          What i love in life
        </Heading>
        <Paragraph>Coding, Music, Drawing, Relaxing, Gaming...</Paragraph>
      </Section>
    </Container>
  )
}
