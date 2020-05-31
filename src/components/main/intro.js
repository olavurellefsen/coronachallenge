import React from "react"
import styled from "styled-components"
import NorthAtlantic from "./northatlantic"
import Team09 from "../../video/team09.m4v"
import Team03 from "../../video/team03.mp4"
import Team11 from "../../video/team11.mp4"
import Team08 from "../../video/team08.mp4"

const Intro = () => {
  return (
    <IntroContainer>
      <IntroTitleStyle>WINNERS - DKK 30,000</IntroTitleStyle>
      <IntroDescriptionStyle>
        The winners of the North Atlantic Corona Challenge 2020 were Shop with
        Me - Samuel Warnock and Rachael Bews from Scotland.
        <VideoStyle controls>
          <source src={Team09} type="video/mp4" />
        </VideoStyle>
      </IntroDescriptionStyle>
      <IntroTitleStyle>SECOND PLACE - DKK 20,000</IntroTitleStyle>
      <IntroDescriptionStyle>
        The runners up in the North Atlantic Corona Challenge 2020 were ParentEd
        - Daniella Levins, Heather Thomson, Egill Anton Hlöðversson, Savanna
        Laing from Scotland and Iceland
        <VideoStyle controls>
          <source src={Team03} type="video/mp4" />
        </VideoStyle>
      </IntroDescriptionStyle>
      <IntroTitleStyle>THIRD PLACE - DKK 10,000</IntroTitleStyle>
      <IntroDescriptionStyle>
        The second runners up in the North Atlantic Corona Challenge 2020 were
        Medical Images Diagnosis With Artificial Intelligence DIMAI - Safa
        Jemai, Diego Balanos Pardo, Jhonatan David Geraldo Rodriguez, Martin
        Gonzales Cuevas, Roberto Escoria from Iceland.
        <VideoStyle controls>
          <source src={Team11} type="video/mp4" />
        </VideoStyle>
      </IntroDescriptionStyle>
      <IntroTitleStyle>
        HIGHLANDS AND ISLANDS ENTERPRISE SUPPORT
      </IntroTitleStyle>
      <IntroDescriptionStyle>
        The winners of the support package from Highlands and Islands Enterprise
        were Tour'st - Nicolai Jensen, George O'Brien, Susie Morton, Alana
        Elliot from Scotland and the Faroe Islands.
        <VideoStyle controls>
          <source src={Team08} type="video/mp4" />
        </VideoStyle>
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

const VideoStyle = styled.video`
  margin: 20px;
  width: 90vw;
  height: 50.6vw;
  max-width: 1400px;
  max-height: 787px;
`

const YouTubeStyle = styled.iframe`
  margin: 20px;
  width: 45vw;
  height: 25.3vw;
  max-width: 1400px;
  max-height: 787px;
`

export default Intro
