import React from 'react'
import { Container, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import { Section } from '../Section'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'

export const ReachOut = () => {
  return (
    <Container display="flex" flexDirection="row" justifyContent="left">
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Where to find me
        </Heading>
        <Container display="flex" flexDirection="row">
          <Link
            href="https://www.linkedin.com/in/yassine-tadlaoui/"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            target="_blank"
          >
            <IoLogoLinkedin size={50} />
          </Link>
          <Link
            href="https://github.com/Gri-ffin"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            marginLeft="1.5rem"
            target="_blank"
          >
            <IoLogoGithub size={50} />
          </Link>
          <Link
            key="Email"
            href="mailto:yassinetadlaoui8@gmail.com"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            marginLeft="1.5rem"
            target="_blank"
          >
            <IoMdMail size={50} />
          </Link>
        </Container>
      </Section>
    </Container>
  )
}
