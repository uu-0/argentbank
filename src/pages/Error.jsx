import React from 'react'

import styled from 'styled-components'
import { colors } from '../style/colors'

const Container = styled.div`
  background-color: ${colors.bgDark};
  height: 1100px;
`

const Title = styled.h1`
  color: white;
  font-weight: 600;
  padding-top: 50px;
  padding-left: 50px;
`

const Text = styled.p`
  color: white;
  font-weight: 400;
  padding-left: 50px;
`

export default function Error() {
  return (
    <Container>
      <Title>
        Error page
      </Title>
      <Text>
        Are you lost ? invalid URL
      </Text>
    </Container>
  )
}
