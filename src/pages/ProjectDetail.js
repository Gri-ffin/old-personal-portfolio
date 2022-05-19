import React, { useEffect, useMemo, useState } from 'react'
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
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner'
import { Card } from '../components/UI/Card'
import { Footer } from '../components/Footer'

const PageDetail = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const [projectData, setProjectData] = useState()
  const [loading, setLoading] = useState(true)
  const query = useQuery()
  let projectTech = query.get('tech')

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      try {
        const data = await axios.get(
          `https://api.github.com/repos/gri-ffin/${id}`
        )

        setProjectData(data.data)
        setLoading(false)
        // if project doesn't exists or not enough permission just redirect to 404 page
      } catch {
        navigate('/404')
      }
    }

    fetchData()
  }, [])

  return (
    <Card>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container pt={28}>
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
              Tech Used
            </Badge>
            <Text fontSize={16}>{projectTech.split(' ').join(', ')}</Text>
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
            <Link
              href={projectData?.homepage}
              style={{ textDecoration: 'none' }}
            >
              <Button colorScheme={useColorModeValue('orange', 'purple')}>
                View Site
              </Button>
            </Link>
            <Link
              href={projectData?.html_url}
              style={{ textDecoration: 'none' }}
            >
              <Button colorScheme={useColorModeValue('blue', 'green')}>
                View Code
              </Button>
            </Link>
          </Container>
        </Container>
      )}
      <Box textAlign="center">
        <Footer />
      </Box>
    </Card>
  )
}

export default PageDetail

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}
