import React from 'react'

import styled from 'styled-components'
import { colors } from '../style/colors'

import Feature from '../components/Feature'
import chatIcon from '/icon-chat.png'
import moneyIcon from '/icon-money.png'
import securityIcon from '/icon-security.png'

const Banner = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url('argentbank/bank-tree.jpeg'});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 33%;
  position: relative;

  @media (max-width: 920px) {
    height: 300px;
    background-position: 0 -50px;
  }
`

const TextBloc = styled.div`
  position: absolute;
  top: 80px;
  right: 80px;
  padding: 32px;
  width: 300px;
  background-color: white;
  @media (max-width: 920px) {
    position: relative;
    top: 2rem;
    right: 0;
    width: 200px;
    margin: 0 auto;
  }
`

const Title = styled.h1`
  margin: 0;
  color: ${colors.gray};
  font-size: 24px;
  @media (max-width: 920px) {
    font-size: 16px;
  }
`

const Text = styled.p`
  font-size: 19.2px;
  margin-bottom: 0;
  @media (max-width: 920px) {
    font-size: 14.4px;
  }
`

const Features = styled.div`
  display: flex;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`

export default function Home() {
  return (
    <>
      <Banner>
        <TextBloc>
          <Title>
            No fees.
          </Title>
          <Title>
            No minimum deposit.
          </Title>
          <Title>
            High interest rates.
          </Title>
          <Text>
            Open a savings account with Argent Bank today!
          </Text>
        </TextBloc>
      </Banner>
      <Features>
        <Feature icon={chatIcon} title={'You are our #1 priority'} text={'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'}/>
        <Feature icon={moneyIcon} title={'More savings means higher rates'} text={'The more you save with us, the higher your interest rate will be!'}/>
        <Feature icon={securityIcon} title={'Security you can trust'} text={'We use top of the line encryption to make sure your data and money is always safe.'}/>
      </Features>
    </>
  )
}