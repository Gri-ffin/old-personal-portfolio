import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export const NavBarLink = ({ path, text }) => {
  return (
    <NavLink to={path}>
      <Link
        p={2}
        _hover="none"
        color={useColorModeValue('whiteAlpha.900', 'gray.800')}
      >
        {text}
      </Link>
    </NavLink>
  )
}
