import React from 'react'
import { Box, Container, Heading } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { ProjectGridItem } from '../components/Projects/Projects'
import classroomChatImage from '../images/projects/discord-clone.webp'
import spotifyCloneImage from '../images/projects/spotify-clone.webp'
import mangaReader from '../images/projects/manga-reader.webp'
import { Card } from '../components/UI/Card'
import { Footer } from '../components/Footer'

const ProjectsPage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Heading as="h2" fontSize={20} mb={6}>
          My Projects
        </Heading>

        <Container>
          <Section>
            <ProjectGridItem
              id="discord-clone"
              title="Classroom Chat"
              image={classroomChatImage}
              techs={['Nextjs', 'Tailwindcss', 'Firebase']}
            >
              A project where me and my classmates can connect to our accounts
              and freely talk.
            </ProjectGridItem>
          </Section>
        </Container>
        <Container>
          <Section>
            <ProjectGridItem
              id="spotify-clone"
              title="Spotify Clone"
              image={spotifyCloneImage}
              techs={['Nextjs', 'Tailwindcss', 'NextAuth', 'Recoil']}
            >
              A school project where I created a lightweight spotify clone where
              I can connect with my spotify account and listen to my favorite
              music.
            </ProjectGridItem>
          </Section>
        </Container>
      </Container>
      <Container>
        <Section>
          <ProjectGridItem
            id="manga-reader"
            title="Manga Reader"
            image={mangaReader}
            techs={['Nextjs', 'Chakra UI', 'Rest API']}
          >
            A Project where I created a website to read different types of
            manga, using the mangadex public api.
          </ProjectGridItem>
        </Section>
      </Container>
      <Box textAlign="center">
        <Footer />
      </Box>
    </Card>
  )
}
export default ProjectsPage
