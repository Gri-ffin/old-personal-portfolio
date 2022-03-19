import React from 'react'
import { Box, Container, Spinner, useColorModeValue } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <Box w="100vw" h="100vh">
      <Container
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner
          size="xl"
          thickness="5px"
          speed="0.5s"
          color={useColorModeValue('black', 'whiteAlpha.900')}
        />
      </Container>
    </Box>
  )
}

export default LoadingSpinner
