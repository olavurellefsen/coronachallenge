import React from "react"
import styled from "styled-components"
import NorthAtlantic from "./northatlantic"

const Intro = () => {
  return (
    <IntroContainer>
      <IntroDescriptionStyle>
        We kicked off with an inspirational talk by{" "}
        <LinkStyle href="/speaker">
          Heini Zachariassen, founder of Vivino
        </LinkStyle>
        , on Friday 29 May 9pm UK time.
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        The talk was live-streamed{" "}
        <a href="https://www.youtube.com/watch?v=QPmZnbDU7wE">here</a>.
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        The registration deadline has passed. Approved participants will receive
        an invitation to our Slack channel Friday before noon.
        <br />
        <br />
      </IntroDescriptionStyle>
      <IntroTitleStyle>
        A 48 HOUR ONLINE CHALLENGE TO TACKLE COVID-19 CRISIS
        <br />
        29-31 MAY 2020
      </IntroTitleStyle>
      <NorthAtlantic />
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
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 20px 0;
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

const LinkStyle = styled.a`
  color: black;
`

export default Intro
