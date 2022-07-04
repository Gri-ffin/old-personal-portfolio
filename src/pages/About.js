import { WhatILove } from '../components/About/WhatILove'
import { AboutMe } from './../components/About/AboutMe'
import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { ReachOut } from '../components/About/SocialMedia'
import { Footer } from '../components/Footer'

const AboutPage = () => {
  return (
    <Flex alignItems="center" w="100vw" h="100vh" justifyContent="center">
      <Flex flexDir="column">
        <AboutMe />
        <WhatILove />
        <ReachOut />
        <Box textAlign="center">
          <Footer />
        </Box>
      </Flex>
    </Flex>
  )
}

export default AboutPage
