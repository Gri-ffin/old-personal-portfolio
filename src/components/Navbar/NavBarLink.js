import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

export const NavBarLink = ({ path, text }) => {
  return (
    <Link
      as={NavLink}
      p={2}
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      to={path}
    >
      {text}
    </Link>
  )
}
