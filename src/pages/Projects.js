import React, { Suspense } from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Section } from '../components/Section'
import { ProjectGridItem } from '../components/Projects/Projects'
import LoadingSpinner from '../components/LoadingSpinner'
const discordCloneImage = React.lazy(
  import('../images/projects/discord-clone.png')
)
const spotifyCloneImage = React.lazy(
  import('../images/projects/spotify-clone.png')
)

const ProjectsPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  )
}
export default ProjectsPage
