import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { colors } from '../style/colors'

import logo from '/argentBankLogo.png'
import icon from '/icon-user.png'

const Container = styled.div`
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 200px;
`

const SignIn = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Icon = styled.img`
    width: 18px;
`

const SignInLink = styled(NavLink)`
    color: ${colors.gray};
    font-weight: 600;
    text-decoration: inherit;
    &:hover{
        text-decoration: underline;
    }
`

export default function Header() {
  return (
    <Container>
        <Logo src={logo} alt='Argent Bank Logo' />
        <SignIn>
            <Icon src={icon} alt='User Icon' />
            <SignInLink to ="/signIn">Sign In</SignInLink>
        </SignIn>
    </Container>
  )
}
