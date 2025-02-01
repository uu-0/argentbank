import React from 'react'
import styled from 'styled-components'
import { colors } from '../style/colors'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  @media (max-width: 920px) {
    padding: 40px;
  }
`

const Icon = styled.img`
  width: 100px;
  padding: 16px;
  border: 10px solid #00bc77;
  border-radius: 50%;
`

const Title = styled.h2`
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    margin: 25px 0 8px;
`

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 10px 0; 
`

export default function Feature({ icon, title, text }) {
  return (
    <Container>
        <Icon src={icon} alt="icon" />
        <Title>{title}</Title>
        <Text>{text}</Text>
    </Container>
  )
}
