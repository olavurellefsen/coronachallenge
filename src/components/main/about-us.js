import React from "react"
import styled from "styled-components"
import HiepLogo from "./hiep-logo"
import DhcsLogo from "./dhcs-logo"

const AboutUs = () => (
  <AboutUsContainer>
    <AboutUsTitleStyle>About us</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      This event is a collaboration between Nordic Atlantic Cooperation (
      <LinkStyle href="https://www.nora.fo">NORA</LinkStyle>) and Highlands and
      Islands Enterprise ({" "}
      <LinkStyle href="https://www.hie.co.uk/">HIE</LinkStyle>)
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Organisers</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      Nordic Atlantic Cooperation (NORA)
      <br />
      Highlands and Islands Enterprise (HIE)
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Programming and web design by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      <LinkStyle href="https://www.tokni.com">Tøkni</LinkStyle> from the Faroe
      Islands
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>The event is inspired by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      Hack the Crisis Barents - Hack the Crisis Norway - Hack the Crisis Estonia
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Thanks to our sponsors and partners</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      Klaksvík municipality (
      <LinkStyle href="https://www.klaksvik.fo">klaksvik.fo</LinkStyle>)
    </AboutUsDescriptionStyle>
    <AboutUsDescriptionStyle>
      Support Fund for the Cooperation between Tórshavn, Reykjavík and Nuuk.
    </AboutUsDescriptionStyle>
    <AboutUsDescriptionStyle>
      Highlands and Islands European Partnership (HIEP), Scottish Government´s
      Digital Health and Care CivTech
    </AboutUsDescriptionStyle>
    <HiepLogo />
    <DhcsLogo />
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
  line-height: 1.6;
`

const LinkStyle = styled.a`
  color: white;
`

export default AboutUs
