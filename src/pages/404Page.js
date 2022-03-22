import React from 'react'
import {
  Box,
  Container,
  Image,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import lostLink from '../images/404/confused-link.png'

const Page404 = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
      display="flex"
      flexDir={{ base: 'column', md: 'row-reverse' }}
      css={{
        '&::-webkit-scrollbar': {
          display: 'hidden'
        }
      }}
    >
      <Container flex={1} alignSelf="center" mt={20}>
        <Image src={lostLink} alt="Lost Link" />
      </Container>
      <Container flex={1} alignSelf="center">
        <Text fontSize="xl">
          Oh, it seems you stumbled on a lost link, but worry not, these links
          might help you:
        </Text>
        <Link
          as={ReactLink}
          to="/"
          color={useColorModeValue('orange', 'purple')}
          fontSize={28}
          display="block"
        >
          Home
        </Link>
        <Link
          as={ReactLink}
          to="/about"
          color={useColorModeValue('orange', 'purple')}
          fontSize={28}
          display="block"
        >
          About
        </Link>
        <Link
          as={ReactLink}
          to="/projects"
          color={useColorModeValue('orange', 'purple')}
          fontSize={28}
          display="block"
        >
          Projects
        </Link>
      </Container>
    </Box>
  )
}

export default Page404
