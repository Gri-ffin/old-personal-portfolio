import React from 'react'
import {
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export function MenuDrop({ IconButton, ReactLink }) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        bg={useColorModeValue('whiteAlpha.900', 'gray.700')}
      />
      <MenuList bg={useColorModeValue('gray.800', 'whiteAlpha.900')}>
        <Link
          as={ReactLink}
          to="/"
          color={useColorModeValue('whiteAlpha.900', 'gray.800')}
        >
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          as={ReactLink}
          to="/about"
          color={useColorModeValue('whiteAlpha.900', 'gray.800')}
        >
          <MenuItem>About</MenuItem>
        </Link>
        <Link
          as={ReactLink}
          to="/projects"
          color={useColorModeValue('whiteAlpha.900', 'gray.800')}
        >
          <MenuItem>Projects</MenuItem>
        </Link>
        <Link
          as="a"
          href="https://github.com/Gri-ffin/personal-portfolio"
          color={useColorModeValue('whiteAlpha.900', 'gray.800')}
          isExternal
        >
          <MenuItem>Source Code</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  )
}
