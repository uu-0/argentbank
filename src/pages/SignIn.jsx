import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../services/api'
import { setToken } from '../services/authentificationSlice'

import styled from 'styled-components'
import { colors } from '../style/colors'

import Icon from '/icon-user.png'

const Container = styled.div`
  background-color: ${colors.bgDark};
  height: 1100px;
`

const SignInBloc = styled.div`
  top: 300px;
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
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 16px;
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  width: 100%;
  margin-bottom: 1rem;
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
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  margin-bottom: 1rem;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`

export default function SignIn() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()

  // Charger les informations depuis localStorage au démarrage
  useEffect(() => {
    const savedCredentials = localStorage.getItem('credentials')
    if (savedCredentials) {
      setCredentials(JSON.parse(savedCredentials))
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login(credentials).unwrap()
      
      if (response.body.token) {
        dispatch(setToken(response.body.token)) // Stocker le token dans Redux
        navigate('/profile') // Naviguer vers la page principale après la connexion
        
        // Sauvegarder les informations si Remember Me est coché
        if (rememberMe) {
          localStorage.setItem('credentials', JSON.stringify(credentials))
        } else {
          localStorage.removeItem('credentials')
        }
      }
    } catch (err) {
      setError('Email or password incorrect') // Afficher l'erreur si la connexion échoue
    }
  }

  return (
    <Container>
      <SignInBloc>
        <Image src={Icon} alt="Icon User" />
        <Title>Sign In</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
          <Label>Password</Label>
          <Input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <RememberMeContainer>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember me</span>
          </RememberMeContainer>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Sign In'}
          </Button>
        </form>
      </SignInBloc>
    </Container>
  )
}
