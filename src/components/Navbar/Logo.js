import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: transform 0.7s ease-in-out;
  }
  &:hover img {
    transform: rotate(360deg);
  }
`

const Logo = () => {
  const dogFootImage = `/images/code-icon${useColorModeValue('', '-dark')}.png`

  return (
    <Link to="/">
      <LogoBox id="logo">
        <Image src={dogFootImage} w={5} h={5} alt="Logo" />
        <Text
          color={useColorModeValue('black', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Yassine Tadlaoui
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
