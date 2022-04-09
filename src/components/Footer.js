import React from 'react'
import { Text, useColorModeValue } from '@chakra-ui/react'

export const Footer = () => {
  const thisYear = new Date().getFullYear()

  return (
    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontSize="xl">
      &copy; {thisYear} - Yassine Tadlaoui
    </Text>
  )
}
