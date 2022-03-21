import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Card = ({ children }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
    >
      <Container
        w="100%"
        h="47%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Container>
    </Box>
  )
}
