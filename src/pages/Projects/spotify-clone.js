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
import image from '../../images/projects/spotify-clone.webp'
import { Section } from '../../components/Section'
import { Card } from '../../components/UI/Card'

const SpotifyClonePage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Section>
          <Link isExternal to="https://spotify-clone-gri-ffin.vercel.app">
            <LinkBox>
              <Heading
                mb={2}
                fontSize={{ base: 18, md: 24 }}
                textDecor="underline"
              >
                Techs and skills
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
            Nextjs, Tailwindcss, SpotifyAPI, NextAuth
          </Text>
          <hr style={{ marginTop: 6, marginBottom: 6 }} />
          <Text fontSize={{ base: 13, md: 15 }}>
            This website is a simple web app where I connect to my spotify
            account and listen to my favorite music, I thought of this website
            because I only wanted to listen to my playlists, it&apos;s minimal
            and it&apos;s design is to my licking. I learned the following while
            doing this project:{' '}
            <UnorderedList>
              <ListItem>
                How to integrate with spotify authentication system using
                NextAuth
              </ListItem>
              <ListItem>
                How to work with an existing API and read through it&apos;s
                documentation
              </ListItem>
              <ListItem>How to design a minimal website.</ListItem>
            </UnorderedList>
          </Text>
        </Section>
      </Container>
    </Card>
  )
}

export default SpotifyClonePage
