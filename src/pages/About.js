import { WhatILove } from '../components/About/WhatILove'
import { AboutMe } from './../components/About/AboutMe'
import React from 'react'
import { Box, useColorModeValue, Container, Image } from '@chakra-ui/react'
import { ReachOut } from '../components/About/SocialMedia'
import { Footer } from '../components/Footer'
const AboutPage = () => {
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
        <Image
          borderColor="whiteAlpha.600"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/profile-pic.jpeg"
          alt="Yassine Tadlaoui Picture"
        />
      </Container>
      <AboutMe />
      <WhatILove />
      <ReachOut />
      <Footer />
    </Box>
  )
}

export default AboutPage
