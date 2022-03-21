import React from 'react'
import { NavBarLink } from './NavBarLink'
import { Stack, Link, useColorModeValue } from '@chakra-ui/react'

export function NavbarLinks() {
  return (
    <Stack
      direction={{
        base: 'column',
        md: 'row'
      }}
      display={{
        base: 'none',
        md: 'flex'
      }}
      width={{
        base: 'full',
        md: 'auto'
      }}
      alignItems="center"
      flexGrow={1}
      mt={{
        base: 4,
        nmd: 0
      }}
    >
      <NavBarLink path="/about" text="About" />
      <NavBarLink path="/projects" text="Projects" />
      <Link
        href="https://github.com/Gri-ffin/personal-portfolio"
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        isExternal
      >
        Source Code
      </Link>
    </Stack>
  )
}
