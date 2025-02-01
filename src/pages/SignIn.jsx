import React from 'react'

import styled from 'styled-components'
import { colors } from '../style/colors'

import Icon from '/icon-user.png'

const Container = styled.div`
  background-color: ${colors.bgDark};
  height: 1100px;
  position: relative;
`

const SignInBloc = styled.div`
  top: 220px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 230px;
  padding: 32px;
  position: absolute;
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 16px;
`

const Title = styled.h1`
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 16px;
  &.bold {
    font-weight: bold;
  }
`

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  &.text { 
    width: 220px;
  }
`

const Button = styled.button`
  background-color: ${colors.blue};
  border: none;
  padding: 8px;
  width: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: underline;
  cursor: pointer;

`

export default function SignIn() {
  return (
    <Container>
      <SignInBloc>
        <Image src={Icon} alt='Icon User'/>
        <Title>Sign In</Title>
        <form >
            <Label className='bold'>
              Username
              <Input type="text" id="username" className='text'/>
            </Label><br/>
            <Label className='bold'>
              Password
              <Input type="password" id="password" className='text'/>
            </Label>
          <Label>
            <Input type="checkbox" id="remember-me"/>
            Remember me
          </Label>
          <Button type='submit'>Sign In</Button>
        </form>
      </SignInBloc>
    </Container>
  )
}