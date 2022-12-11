import React from 'react'
import { Container } from '@chakra-ui/react'
import { Section } from '../Section'
import { ProjectGridItem } from './ProjectGridItem'

const Project = ({ id, title, image, children }) => (
  <Container>
    <Section>
      <ProjectGridItem id={id} title={title} image={image}>
        {children}
      </ProjectGridItem>
    </Section>
  </Container>
)

export default Project
