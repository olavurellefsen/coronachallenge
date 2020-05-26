import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NorthAtlantic from "./northatlantic"

const Intro = () => {
  return (
    <IntroContainer>
      <IntroDescriptionStyle>
        Are you a young person, who either lives in or comes from the North
        Atlantic, and has an idea that can help our region? Then we want to hear
        from you!
      </IntroDescriptionStyle>
      <ButtonStyle href="/signup">
        SIGN UP
        <br />
        BEFORE 28 MAY 23:59
      </ButtonStyle>
      <IntroTitleStyle>
        A 48 HOUR ONLINE CHALLENGE TO TACKLE COVID-19 CRISIS
        <br />
        29-31 MAY 2020
      </IntroTitleStyle>
      <NorthAtlantic />
      <IntroTitleStyle>
        YOU CAN PARTICIPATE AND
        <br />
        WIN 30,000 DKK
      </IntroTitleStyle>
      <IntroDescriptionStyle>
        The Coronavirus pandemic has changed our lives dramatically in just two
        months. Businesses, communities and our way of living is not like it
        used to be. In the North Atlantic Corona Challenge we challenge you to
        develop your best idea to save lives, businesses and communities in our
        North Atlantic region.
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        Organised by Nordic Atlantic Cooperation (NORA) and Highlands and
        Islands Enterprise (HIE).
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        Do you want to participate in this North Atlantic challenge? Sign up and
        join the fun!
      </IntroDescriptionStyle>
      <ButtonStyle href="/inspiration">INSPIRATION</ButtonStyle>
      <ButtonStyle href="/speaker">HEINI ZACHARIASSEN - SPEAKER</ButtonStyle>
      <ButtonStyle href="/media">MEDIA COVERAGE</ButtonStyle>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 20px 5vw;
`

const IntroTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
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
