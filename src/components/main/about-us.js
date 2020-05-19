import React from "react"
import styled from "styled-components"

const AboutUs = () => (
  <AboutUsContainer>
    <AboutUsTitleStyle>About us</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      This event is a collaboration between Nordic Atlantic Cooperation (NORA)
      and Highlands and Islands Enterprise (HIE)
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Organisers</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      North Atlantic Cooperation (NORA) Highlands and Islands Enterprise (HIE)
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Partners</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>...</AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Webpage designed by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>Tøkni</AboutUsDescriptionStyle>
    <AboutUsTitleStyle>The event is inspired by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      Hack the Crisis Barents Hack the Crisis Norway Hack the Crisis Estonia
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Thanks to our sponsors and partners</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>Klaksvík municipality</AboutUsDescriptionStyle>
  </AboutUsContainer>
)

const AboutUsContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 20px 5vw;
  background: #434343;
  color: white;
  padding: 40px 10px;
`

const AboutUsTitleStyle = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
`

const AboutUsDescriptionStyle = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin: 10px 0 30px 0;
  padding: 10px;
`

export default AboutUs
