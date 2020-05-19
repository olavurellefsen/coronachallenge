import React from "react"
import styled from "styled-components"

const AboutUs = () => (
  <AboutUsContainer>
    <AboutUsTitleStyle>About us</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      This event is a collaboration between{" "}
      <LinkStyle href="https://www.nora.fo">
        North Atlantic Cooperation (NORA)
      </LinkStyle>{" "}
      and{" "}
      <LinkStyle href="https://www.hie.co.uk/">
        Highlands and Islands Enterprise (HIE)
      </LinkStyle>
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Organisers</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      <LinkStyle href="https://www.nora.fo">
        North Atlantic Cooperation (NORA)
      </LinkStyle>
      <br />
      <LinkStyle href="https://www.hie.co.uk/">
        Highlands and Islands Enterprise (HIE)
      </LinkStyle>
    </AboutUsDescriptionStyle>

    <AboutUsTitleStyle>Web application and design by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      <LinkStyle href="https://www.tokni.com">Tøkni Faroe Islands</LinkStyle>
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>The event is inspired by</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
      Hack the Crisis Barents - Hack the Crisis Norway - Hack the Crisis Estonia
    </AboutUsDescriptionStyle>
    <AboutUsTitleStyle>Thanks to our sponsors and partners</AboutUsTitleStyle>
    <AboutUsDescriptionStyle>
    <LinkStyle href="https://www.klaksvik.fo">Klaksvík municipality</LinkStyle> and the Support Fund for the Cooperation between
      Torshavn, Reykjavik and Nuuk.
    </AboutUsDescriptionStyle>
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
  text-decoration: none;
`

export default AboutUs
