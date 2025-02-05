import React from 'react'

import styled from 'styled-components'
import { colors } from '../style/colors'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem; 
    @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`

const InfoBloc = styled.div`
  flex: 1;
  width: 100%;
`

const ButtonBloc = styled.div`
  flex:0;
  width: 100%; 
`

const Text = styled.h3`
    color: ${colors.gray};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`

const Solde = styled.h3`
    font-size: 40px;
    margin: 0;
`

const ViewTransactions = styled.button`
    background-color: ${colors.blue};
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border-color: ${colors.blue};
    width: 200px;
    padding: 8px;
    margin-top: 1rem;
    cursor: pointer;
    @media (max-width: 920px) {
      width: 100%;
  }
`

export default function ProfilCard({type, m, solde, balance}) {
  return (
    <Container>
        <InfoBloc>
            <Text>Argent Bank {type} (x{m})</Text>
            <Solde>${solde}</Solde>
            <Text>{balance} Balance</Text>
        </InfoBloc>
        <ButtonBloc>
            <ViewTransactions>View Transactions</ViewTransactions>
        </ButtonBloc>
    </Container>
  )
}