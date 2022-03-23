import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Card = ({ children }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'hidden'
        }
      }}
    >
      {children}
    </Box>
  )
}
