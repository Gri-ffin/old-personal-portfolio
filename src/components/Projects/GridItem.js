import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'

export const GridItem = ({ children, path, title, image }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={image}
          alt={`Project ${title} thumbnail`}
          borderRadius="lg"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={path} isExternal>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}
