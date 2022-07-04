import { WhatILove } from '../components/About/WhatILove'
import { AboutMe } from './../components/About/AboutMe'
import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { ReachOut } from '../components/About/SocialMedia'
import { Footer } from '../components/Footer'

const AboutPage = () => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <AboutMe />
      <WhatILove />
      <ReachOut />
      <Box textAlign="center">
        <Footer />
      </Box>
    </Container>
  )
}

export default AboutPage
