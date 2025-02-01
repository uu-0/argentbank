import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
`

export default function Footer() {
  return (
    <Container>
      <Text>Copyright 2025 Argent Bank</Text>
    </Container>
  )
}