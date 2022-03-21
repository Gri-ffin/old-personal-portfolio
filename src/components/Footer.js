import React from 'react'
import { Text, useColorModeValue, Container } from '@chakra-ui/react'

export const Footer = () => {
  let yearNow = new Date().getFullYear()

  return (
    <Container as="footer">
      <Text
        as="h5"
        color={useColorModeValue('black', 'whiteAlpha.900')}
        textAlign="center"
        fontSize={{ base: 14, md: 20 }}
      >
        &copy; {yearNow} Yassine Tadlaoui, All Rights Reserved.
      </Text>
    </Container>
  )
}
