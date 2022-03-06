import { Box } from '@chakra-ui/react'
import React from 'react'
import './Index.css'

const LoadingPage = () => {
  return (
    <Box className="no-scroll-preload">
      <Box className="loader-container">
        <Box className="atom">
          <Box className="electron"></Box>
          <Box className="electron-alpha"></Box>
          <Box className="electron-omega"></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LoadingPage
