import React from 'react'
import {
  Container,
  Heading,
  Link,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { Section } from '../Section'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail,
  IoMdDocument
} from 'react-icons/io'
import { motion } from 'framer-motion'

export const ReachOut = () => {
  return (
    <Container display="flex" flexDirection="row" justifyContent="left">
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Where to find me
        </Heading>
        <Container display="flex" flexDirection="row">
          <Tooltip label="LinkedIn">
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
                <IoLogoLinkedin size={40} />
              </motion.button>
            </Link>
          </Tooltip>
          <Tooltip label="Github">
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
                <IoLogoGithub size={40} />
              </motion.button>
            </Link>
          </Tooltip>
          <Tooltip label="Mail">
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
                <IoMdMail size={40} />
              </motion.button>
            </Link>
          </Tooltip>
          <Tooltip label="Resume">
            <Link
              key="Resume"
              href="/resume.pdf"
              color={useColorModeValue('gray.900', 'whiteAlpha.900')}
              marginLeft="1.5rem"
              isExternal
              download
            >
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              >
                <IoMdDocument size={40} />
              </motion.button>
            </Link>
          </Tooltip>
        </Container>
      </Section>
    </Container>
  )
}
