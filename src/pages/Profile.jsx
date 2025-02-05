import React, { useState } from 'react'
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '../services/api'
import styled from 'styled-components'
import { colors } from '../style/colors'
import ProfilCard from '../components/ProfilCard'

const Container = styled.div`
  background-color: ${colors.bgDark};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.header`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WelcomeBloc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Welcome = styled.h1`
  color: white;
  text-align: center;
  margin: 0;
`

const Button = styled.button`
  margin-top: 20px;
  background-color: ${colors.blue};
  padding: 10px;
  color: white;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: ${colors.blueLight};
  }
`

const EditNameBloc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputsBloc = styled.div`
  display: flex;
  gap: 10px;
`

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const ButtonsBloc = styled.div`
  display: flex;
  gap: 10px;
`

const Content = styled.div`
  width: 100%;
  margin-bottom: 15%;
`

const InformationText = styled.h2`
  padding-top: 100px;
  color: white;
  font-size: 20px;
`

const InformationSpan = styled.p`
  padding-bottom: 800px;
  color: white;
`

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const { data, error, isLoading, refetch } = useGetUserProfileQuery()
  const [updateUserProfile] = useUpdateUserProfileMutation()

  if (isLoading) {
    return (
      <Container>
        <InformationText>Loading...</InformationText>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <InformationText>
          Error loading Profile Page
        </InformationText>
        <InformationSpan>
          You must be logged in to access this page
        </InformationSpan>
      </Container>
    )
  }

  const handleEditClick = () => {
    setIsEditing(true)
    setFirstName(data?.body.firstName)
    setLastName(data?.body.lastName)
  }

  const handleCancelClick = () => setIsEditing(false)

  const handleSaveClick = async () => {
    try {
      await updateUserProfile({ firstName, lastName }).unwrap()
      await refetch()
      setIsEditing(false)
    } catch (err) {
      console.error('Failed to update profile:', err)
    }
  }

  return (
    <Container>
      <Header>
        <Welcome>Welcome back</Welcome>
        {!isEditing ? (
          <WelcomeBloc>
            <Welcome>{data?.body.firstName} {data?.body.lastName}!</Welcome>
            <Button onClick={handleEditClick}>Edit Name</Button>
          </WelcomeBloc>
        ) : (
          <EditNameBloc>
            <InputsBloc>
              <Input 
                type="text" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name" 
              />
              <Input 
                type="text" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name" 
              />
            </InputsBloc>
            <ButtonsBloc>
              <Button onClick={handleSaveClick}>Save</Button>
              <Button onClick={handleCancelClick}>Cancel</Button>
            </ButtonsBloc>
          </EditNameBloc>
        )}
      </Header>
      <Content>
        <ProfilCard type="Checking" m="8349" solde="2,082.79" balance="Available" />
        <ProfilCard type="Savings" m="6712" solde="10,928.42" balance="Available" />
        <ProfilCard type="Credit Card" m="8349" solde="184.30" balance="Current" />
      </Content>
    </Container>
  )
}

