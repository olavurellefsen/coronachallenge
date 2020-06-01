import React from "react"
import styled from "styled-components"
import NorthAtlantic from "./northatlantic"

const Intro = () => {
  return (
    <IntroContainer>
      <TitleStyle>
        A 48 HOUR ONLINE CHALLENGE TO TACKLE COVID-19 CRISIS
        <br />
        29-31 MAY 2020
      </TitleStyle>
      <DescriptionStyle>
        The Coronavirus pandemic has changed our lives dramatically in just two
        months. Businesses, communities and our way of living is not like it
        used to be. In the North Atlantic Corona Challenge we challenge you to
        develop your best idea to save lives, businesses and communities in our
        North Atlantic region.
      </DescriptionStyle>
      <DescriptionStyle>
        Organised by Nordic Atlantic Cooperation (NORA) and Highlands and
        Islands Enterprise (HIE).
        <br />
        <br />
      </DescriptionStyle>
      <TitleStyle>Opening webinar - Live streaming 29 May 2020</TitleStyle>
        <DescriptionStyle>
          The opening webinar of the North Atlantic Corona Challenge 2020 with
          keynote speaker Heini Zachariassen. Hosts: Jákup Justinussen and
          Øystein Andresen.
        </DescriptionStyle>
        <DescriptionStyle>
          <YouTubeStyle
            src="https://www.youtube.com/embed/QPmZnbDU7wE?start=1192"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DescriptionStyle>
        <TitleStyle>Closing webinar - Live streaming 31 May 2020</TitleStyle>
        <DescriptionStyle>
          The closing webinar of the North Atlantic Corona Challenge 2020 with
          the four winning projects presented by judge chair Christian Wennecke.
          Hosts: Jákup Justinussen and Øystein Andresen.
        </DescriptionStyle>
        <DescriptionStyle>
          <YouTubeStyle
            src="https://www.youtube.com/embed/B0R3wnOLpU0?start=504"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DescriptionStyle>
      <TitleStyle>WINNERS - DKK 30,000</TitleStyle>
      <DescriptionStyle>
        The winners of the North Atlantic Corona Challenge 2020 were Shop with
        Me - Samuel Warnock and Rachael Bews from Scotland.
      </DescriptionStyle>
      <DescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/KMtW-dIjfJY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DescriptionStyle>
      <TitleStyle>SECOND PLACE - DKK 20,000</TitleStyle>
      <DescriptionStyle>
        The runners up in the North Atlantic Corona Challenge 2020 were ParentEd
        - Daniella Levins, Heather Thomson, Egill Anton Hlöðversson, Savanna
        Laing from Scotland and Iceland.
      </DescriptionStyle>
      <DescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/yrGtaCWZGRI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DescriptionStyle>
      <TitleStyle>THIRD PLACE - DKK 10,000</TitleStyle>
      <DescriptionStyle>
        The second runners up in the North Atlantic Corona Challenge 2020 were
        Medical Images Diagnosis With Artificial Intelligence DIMAI - Safa
        Jemai, Diego Balanos Pardo, Jhonatan David Geraldo Rodriguez, Martin
        Gonzales Cuevas, Roberto Escoria from Iceland.
      </DescriptionStyle>
      <DescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/kXLyrveOv2g"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DescriptionStyle>
      <TitleStyle>
        HIGHLANDS AND ISLANDS ENTERPRISE SUPPORT
      </TitleStyle>
      <DescriptionStyle>
        The winners of the support package from Highlands and Islands Enterprise
        were Tour'st - Nicolai Jensen, George O'Brien, Susie Morton, Alana
        Elliot from Scotland and the Faroe Islands.
      </DescriptionStyle>
      <DescriptionStyle>
        <YouTubeStyle
          src="https://www.youtube.com/embed/GOuCb_fCRgs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DescriptionStyle>
      <DescriptionStyle>
        Some of the other entries can be found below
      </DescriptionStyle>
      <DescriptionStyle>
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
      </DescriptionStyle>
      <NorthAtlantic />
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

const TitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
`

const DescriptionStyle = styled.div`
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
`

const YouTubeStyle = styled.iframe`
  margin: 20px;
  width: 90vw;
  height: 50.6vw;
  max-width: 1400px;
  max-height: 787px;
`

export default Intro
