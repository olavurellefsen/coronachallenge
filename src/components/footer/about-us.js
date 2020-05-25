import React from "react"
import styled from "styled-components"
import Oystein from "./oystein"
import HiepLogo from "./hiep-logo"
import HieLogo from "./hie-logo"
import DhcsLogo from "./dhcs-logo"
import NoraLogo from "./nora-logo"
import TokniLogo from "./tokni-logo"

const AboutUs = () => (
  <AboutUsContainer id="aboutus">
    <AboutUsTitleStyle>Contact us</AboutUsTitleStyle>
    <LinkStyle href="https://nora.fo/secretariats"><Oystein /></LinkStyle>
    <AboutUsDescriptionStyle>
      If you have questions about the event, you can contact Mr Øystein Andresen at NORA.<br/>
      Mobile +298 214430 - Email <a href="mailto:oystein@nora.fo">oystein@nora.fo</a>
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>About us</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      The North Atlantic Corona Challenge event is a collaboration between
      Nordic Atlantic Cooperation (
      <LinkStyle href="https://www.nora.fo">NORA</LinkStyle>) and Highlands and
      Islands Enterprise ({" "}
      <LinkStyle href="https://www.hie.co.uk/">HIE</LinkStyle>)
      <br />
      <br />
      <LinkStyle href="/privacypolicy">Privacy Policy</LinkStyle>
      <br />
      <LinkStyle href="/rules">Rules and Code of Conduct</LinkStyle>
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
    <LinkStyle href="https://www.hie.co.uk/"><HieLogo /></LinkStyle>
    <LinkStyle href="https://www.nora.fo"><NoraLogo /></LinkStyle>
    <HiepLogo />
    <DhcsLogo />
    <LinkStyle href="https://www.tokni.com"><TokniLogo /></LinkStyle>
  </AboutUsContainer>
)

const AboutUsContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 20px 5vw;
  background: #434343;
  color: white;
  padding: 40px 10px;
  text-decoration: none;
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
