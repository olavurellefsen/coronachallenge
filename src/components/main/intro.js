import React from "react"
import styled from "styled-components"
import NorthAtlantic from "./northatlantic"

const Intro = () => {
  return (
    <IntroContainer>
      <IntroDescriptionStyle>
        The winners are being announced at the final webinar below.
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/B0R3wnOLpU0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        Some of the entries can be found below{" "}
      </IntroDescriptionStyle>
      <IntroDescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/L3VfTupzZK0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/pE5UUkcxNaY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/Id8rdA5pZKE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/10_Pnu4A1Is"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/VkTgw5HwX_c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/eGT_MrhwMj8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <YouTubeStyle
          src="https://www.youtube.com/embed/0quq1x23Sso"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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

const YouTubeStyle = styled.iframe`
  margin: 20px;
  width: 45vw;
  height: 25.3vw;
  max-width: 1400px;
  max-height: 787px;
`

export default Intro
