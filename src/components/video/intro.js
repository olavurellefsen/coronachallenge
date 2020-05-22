import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroDescriptionStyle>
      Are you a young person living in the North Atlantic and have an idea that
      can help our region, then we want to hear from you!
    </IntroDescriptionStyle>
    <ButtonStyle href="/signup">SIGN UP</ButtonStyle>
    <ButtonStyle href="/">MAIN PAGE</ButtonStyle>
    <ButtonStyle href="/rules">RULES</ButtonStyle>
  </IntroContainer>
)

const IntroContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 0 5vw;
`

const IntroDescriptionStyle = styled.div`
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
`

const ButtonStyle = styled.a`
  display: block;
  position: relative;
  margin: 40px 10px;
  max-width: 400px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
`

export default Intro
