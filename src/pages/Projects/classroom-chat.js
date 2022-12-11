import React from 'react'
import {
  Container,
  Heading,
  Image,
  Text,
  Link,
  LinkBox,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import LoadingSpinner from '../../components/LoadingSpinner'
import image from '../../assets/classroom-chat.webp'
import { Section } from '../../components/Section'
import { Card } from '../../components/UI/Card'
import { Link as ReactLink } from 'react-router-dom'

const ClassroomChatPage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Section>
          <Link as={ReactLink} to="https://classroom-chat-gri-ffin.vercel.app">
            <LinkBox>
              <Heading
                mb={2}
                fontSize={{ base: 18, md: 24 }}
                textDecor="underline"
              >
                Classroom Chat
              </Heading>
              <Image
                src={image}
                alt={`Project classroom chat thumbnail`}
                borderRadius="lg"
                placeholder="blur"
                fallback={<LoadingSpinner imageLoad={true} />}
              />
            </LinkBox>
          </Link>
          <Text fontSize={{ base: 15, md: 20 }}>
            Nextjs, Tailwindcss, Firebase
          </Text>
          <hr style={{ marginTop: 6, marginBottom: 6 }} />
          <Text fontSize={{ base: 13, md: 15 }}>
            School homework project, this was my first fullstack project and
            school assignement. While it has a lot of unfinished stuff and I
            still could add a lot of cool features I still learned a lot of
            stuff:{' '}
            <UnorderedList>
              <ListItem>Working with a cloud based database.</ListItem>
              <ListItem>
                How to manage and listen to real time changes in the backend for
                real time chat.
              </ListItem>
              <ListItem>Use and manage an authentication system.</ListItem>
            </UnorderedList>
          </Text>
        </Section>
      </Container>
    </Card>
  )
}

export default ClassroomChatPage
