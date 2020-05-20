import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroTitleStyle>REGISTER</IntroTitleStyle>
    <IntroDescriptionStyle>
      Please provide your details below to register for the event.
    </IntroDescriptionStyle>
  </IntroContainer>
)

const IntroContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 640px 5vw 20px 5vw;
`

const IntroTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`

const IntroDescriptionStyle = styled.div`
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
`

export default Intro
