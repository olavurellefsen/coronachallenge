import React from "react"
import styled from "styled-components"

const Intro = () => (
  <IntroContainer>
    <IntroTitleStyle>A 48 HOUR ONLINE CHALLENGE TO TACKLE COVID-19 CRISIS<br/>29-31 MAY 2020</IntroTitleStyle>
    <IntroDescriptionStyle>
      The Coronavirus pandemic has changed our lives over only two months.
      Businesses, communities and our way of living is not like it used to be.
      In the North Atlantic Corona Challenge we challenge you to develop your
      best idea to save lives, businesses and communities in our North Atlantic
      region.
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
