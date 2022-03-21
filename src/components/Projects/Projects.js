import React from 'react'
import { Container, Image, Link, LinkBox, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as ReactLink } from 'react-router-dom'

export const ProjectGridItem = ({ children, id, title, image }) => {
  return (
    <motion.div w="100%" align="center" whileHover={{ scale: 1.1 }}>
      <Link
        as={ReactLink}
        to={`/projects/${id}`}
        style={{ textDecoration: 'none' }}
      >
        <LinkBox>
          <Image
            src={image}
            alt={`Project ${title} thumbnail`}
            borderRadius="lg"
            placeholder="blur"
          />
          <Container align="center">
            <Text mt={2} fontSize={{ base: 18, md: 24 }}>
              {title}
            </Text>
          </Container>
          <Text fontSize={{ base: 14, md: 15 }} align="center">
            {children}
          </Text>
        </LinkBox>
      </Link>
    </motion.div>
  )
}
