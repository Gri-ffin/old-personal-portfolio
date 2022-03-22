import React, { useEffect, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PageDetail = () => {
  let { id } = useParams()
  const [projectData, setProjectData] = useState()
  const [languages, setLanguages] = useState()

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://api.github.com/repos/gri-ffin/${id}`
      )
      setProjectData(data.data)
      const languages = await axios.get(data.data.languages_url)
      setLanguages(Object.getOwnPropertyNames(languages.data))
    }

    fetchData()
  }, [])

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
      <Container
        pt={28}
        css={{
          '&::-webkit-scrollbar': {
            display: 'hidden'
          }
        }}
      >
        <Heading
          as="h2"
          fontSize={20}
          mb={6}
          textDecor="underline"
          textUnderlineOffset={2}
        >
          {id}
        </Heading>
        <Container>
          <img src={require(`../images/projects/${id}.webp`)} alt={id} />
        </Container>
        <Container mt={5}>
          <Badge fontSize={15} p={1}>
            Description
          </Badge>
          <Text fontSize={16}>{projectData?.description}</Text>
          <Badge fontSize={15} p={1} mt={3}>
            Language
          </Badge>
          <Text fontSize={16}>{languages?.join(', ')}</Text>
          <Badge fontSize={15} p={1} mt={3}>
            Created at
          </Badge>
          <Text fontSize={16}>{projectData?.created_at.split('T')[0]}</Text>
          <Badge fontSize={15} p={1} mt={3}>
            Last update
          </Badge>
          <Text fontSize={16} mb={4}>
            {projectData?.pushed_at.split('T')[0]}
          </Text>
        </Container>
        <Container display="flex" justifyContent="space-evenly">
          <Link href={projectData?.homepage} style={{ textDecoration: 'none' }}>
            <Button colorScheme={useColorModeValue('orange', 'purple')}>
              View Site
            </Button>
          </Link>
          <Link href={projectData?.html_url} style={{ textDecoration: 'none' }}>
            <Button colorScheme={useColorModeValue('blue', 'green')}>
              View Code
            </Button>
          </Link>
        </Container>
      </Container>
    </Box>
  )
}

export default PageDetail
