import React from 'react'
import { Container, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import { Section } from '../Section'
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io'
import { motion } from 'framer-motion'

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
            isExternal
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
            >
              <IoLogoLinkedin size={50} />
            </motion.button>
          </Link>
          <Link
            href="https://github.com/Gri-ffin"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            marginLeft="1.5rem"
            isExternal
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
            >
              <IoLogoGithub size={50} />
            </motion.button>
          </Link>
          <Link
            key="Email"
            href="mailto:yassinetadlaoui8@gmail.com"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            marginLeft="1.5rem"
            isExternal
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 }
              }}
            >
              <IoMdMail size={50} />
            </motion.button>
          </Link>
        </Container>
      </Section>
    </Container>
  )
}
