import React from 'react'
import {
  Container,
  Heading,
  Image,
  Text,
  Link,
  LinkBox
} from '@chakra-ui/react'
import LoadingSpinner from '../../components/LoadingSpinner'
import image from '../../images/projects/techs.png'
import { Section } from '../../components/Section'
import { Card } from '../../components/UI/Card'

const TechsPage = () => {
  return (
    <Card>
      <Container pt={28}>
        <Section>
          <Link isExternal to="https://techs-gri-ffin.vercel.app">
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
                alt={`Project Techs thumbnail`}
                borderRadius="lg"
                placeholder="blur"
                fallback={<LoadingSpinner imageLoad={true} />}
              />
            </LinkBox>
          </Link>
          <Text fontSize={{ base: 15, md: 20 }}>
            Astro, Tailwindcss, Markdown, ReactJS
          </Text>
          <hr style={{ marginTop: 6, marginBottom: 6 }} />
          <Text fontSize={{ base: 13, md: 15 }}>
            Website to showcase my Skills I learned and Techonolgies I used, I
            developed this website to give recruiters an easy way to see my
            skills instead of reading them on my resume.
          </Text>
        </Section>
      </Container>
    </Card>
  )
}

export default TechsPage
