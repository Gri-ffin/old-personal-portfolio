import React from 'react'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { ProjectGridItem } from '../components/Projects/Projects'
import discordCloneImage from '../images/projects/discord-clone.webp'
import spotifyCloneImage from '../images/projects/spotify-clone.webp'

const ProjectsPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'hidden'
        }
      }}
    >
      <Container pt={28}>
        <Heading as="h2" fontSize={20} mb={6}>
          My Projects
        </Heading>

        <Container>
          <Section>
            <ProjectGridItem
              id="discord-clone"
              title="Discord/public-chat"
              image={discordCloneImage}
            >
              A simple personal project with a discord front end where you can
              connect with your google account and chat in a public rooms with
              other people.
            </ProjectGridItem>
          </Section>
        </Container>
        <Container>
          <Section>
            <ProjectGridItem
              id="spotify-clone"
              title="Spotify Clone"
              image={spotifyCloneImage}
            >
              A school project where I created a lightweight spotify clone where
              I can connect with my spotify account and listen to my favorite
              music.
            </ProjectGridItem>
          </Section>
        </Container>
      </Container>
    </Box>
  )
}
export default ProjectsPage
