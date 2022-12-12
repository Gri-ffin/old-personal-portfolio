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
import image from '../../images/projects/manga-reader.webp'
import { Section } from '../../components/Section'
import { Card } from '../../components/UI/Card'

const MangaReaderPage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Section>
          <Link isExternal to="https://manga-reader-gri-ffin.vercel.app">
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
            Nextjs, ChakraUI, MangadexAPI
          </Text>
          <hr style={{ marginTop: 6, marginBottom: 6 }} />
          <Text fontSize={{ base: 13, md: 15 }}>
            This website is a Side Project web app I wanted to code because I
            thought it would be fun, and also so I could read different mangas,
            I think I could still add a lot more features like Authentication,
            the design could also use some more work, but I learned things while
            doing while developing this website which I think is greatly
            beneficial:
            <UnorderedList>
              <ListItem>Working with a Styled Components Library.</ListItem>
              <ListItem>
                Implementing search feature and pagination to sort different
                mangas.
              </ListItem>
              <ListItem>
                Switching through different chapters of each manga.
              </ListItem>
            </UnorderedList>
          </Text>
        </Section>
      </Container>
    </Card>
  )
}

export default MangaReaderPage
