import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import classroomChatImage from '../images/projects/discord-clone.webp'
import spotifyCloneImage from '../images/projects/spotify-clone.webp'
import mangaReader from '../images/projects/manga-reader.webp'
import { Card } from '../components/UI/Card'
import { Footer } from '../components/Footer'
import Project from '../components/Projects/Project'

const ProjectsPage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Heading as="h2" fontSize={20} mb={6}>
          My Projects
        </Heading>
        <Project
          id="classroom-chat"
          title="Classroom Chat"
          image={classroomChatImage}
        >
          A project where me and my classmates can connect to our accounts and
          freely talk.
        </Project>
        <Project
          id="spotify-clone"
          title="Spotify Clone"
          image={spotifyCloneImage}
        >
          A school project where I created a lightweight spotify clone where I
          can connect with my spotify account and listen to my favorite music.
        </Project>
        <Project id="manga-reader" title="Manga Reader" image={mangaReader}>
          A Project where I created a website to read different types of manga,
          using the mangadex public api.
        </Project>
      </Container>
      <Box textAlign="center">
        <Footer />
      </Box>
    </Card>
  )
}
export default ProjectsPage
