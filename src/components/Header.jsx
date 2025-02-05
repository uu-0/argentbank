import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserProfileQuery } from '../services/api'
import { clearToken } from '../services/authentificationSlice'

import styled from 'styled-components'
import { colors } from '../style/colors'

import logo from '/argentBankLogo.png'
import userIcon from '/icon-user.png'
import logOutIcon from '/icon-logout.png'

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
  &:hover {
    text-decoration: underline;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const LogoutLink = styled(NavLink)`
  color: ${colors.gray};
  font-weight: 600;
  text-decoration: inherit;
  &:hover {
    text-decoration: underline;
  }
`

const Name = styled.p`
    font-weight: bold;
`

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = useSelector(state => state.auth.token)

  const { data, error, isLoading } = useGetUserProfileQuery()

  const handleLogout = () => {
    dispatch(clearToken()) 
    localStorage.removeItem('token')
    navigate('/signIn')  
  }

  return (
    <Container>
      <Logo src={logo} alt='Argent Bank Logo' />
      {token ? (
        <UserInfo>
          <Icon src={userIcon} alt='User Icon' />
          <Name>{data ? `${data?.body.firstName}` : 'Loading...'}</Name>
          <Icon src={logOutIcon} alt='User Icon' />
          <LogoutLink to="/signin" onClick={handleLogout}>
            Sign Out
          </LogoutLink>
        </UserInfo>
      ) : (
        <SignIn>
          <Icon src={userIcon} alt='User Icon' />
          <SignInLink to="/signIn">Sign In</SignInLink>
        </SignIn>
      )}
    </Container>
  )
}
