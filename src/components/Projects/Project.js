import React from 'react'
import { Container } from '@chakra-ui/react'
import { Section } from '../Section'
import { ProjectGridItem } from './Projects'

const Project = ({ id, title, image, techs, children }) => (
  <Container>
    <Section>
      <ProjectGridItem id={id} title={title} image={image} techs={techs}>
        {children}
      </ProjectGridItem>
    </Section>
  </Container>
)

export default Project
