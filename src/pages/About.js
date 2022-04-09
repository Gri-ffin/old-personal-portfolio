import { WhatILove } from '../components/About/WhatILove'
import { AboutMe } from './../components/About/AboutMe'
import React from 'react'
import { Box, Container, Image } from '@chakra-ui/react'
import { ReachOut } from '../components/About/SocialMedia'
import { motion } from 'framer-motion'
import { Card } from '../components/UI/Card'
import { Footer } from '../components/Footer'

const AboutPage = () => {
  return (
    <Card>
      <Container
        w="100%"
        h="47%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            borderRadius: '100%'
          }}
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
        </motion.div>
      </Container>
      <AboutMe />
      <WhatILove />
      <ReachOut />
      <Box textAlign="center">
        <Footer />
      </Box>
    </Card>
  )
}

export default AboutPage
