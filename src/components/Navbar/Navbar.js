import { MenuDrop } from './MenuDrop'
import { NavbarLinks } from './Links'
import React from 'react'
import Logo from './Logo'
import {
  Container,
  Box,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggleButton'

const NavBar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('whiteAlpha.900', 'gray.700')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW={'container.lg'}
        flexWrap={'wrap'}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <NavbarLinks useColorModeValue={useColorModeValue} />
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <MenuDrop
              IconButton={IconButton}
              useColorModeValue={useColorModeValue}
              ReactLink={ReactLink}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
