import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroTitleStyle>SIGN UP</IntroTitleStyle>
  </IntroContainer>
)

const IntroContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 0;
  padding: 60px 5vw 10px 5vw;
  background: #e8e8e8;
`

const IntroTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
`

export default Intro
