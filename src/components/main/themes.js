import React, { useState } from "react"
import styled from "styled-components"
import GirlWithMaskImage from "./girl-with-mask"
import ComputerStayHomeImage from "./computer-stay-home"
import CityImage from "./city"

const Themes = () => {
  const [saveLives, setSaveLives] = useState(false)
  const [saveBusinesses, setSaveBusinesses] = useState(false)
  const [saveCommunities, setSaveCommunities] = useState(false)

  return (
    <ThemesContainer>
      <ThemesTitleStyle>THREE THEMES</ThemesTitleStyle>
      <ThemesDescriptionStyle>
        The hackathon focuses on three main themes
      </ThemesDescriptionStyle>
      <ThemesList>
        <ThemeBox>
          <ThemeTitle>#SAVELIVES</ThemeTitle>
          <GirlWithMaskImage />
          <ThemeDescription expanded={saveLives}>
            <p>
              Coronavirus is a threat not only to our physical health –
              especially for our most elderly and fragile citizens; it can also
              cause mental health issues and other illnesses as people are less
              likely to seek medical help during the Covid-19 pandemic.
              Lockdowns and isolations can be a real struggle to people in our
              most rural and remote areas.
            </p>
            <p>
              We need solutions on how to overcome long distances to access
              medical and social care; how to protect our most vulnerable
              people; how to address loneliness and mental health issues due to
              isolation; how to support families through lockdowns and abusive
              relationships during the pandemic.
            </p>
          </ThemeDescription>
          <ThemeDescription onClick={() => setSaveLives(!saveLives)}>
            <ExpandStyle>{saveLives ? `-` : `+`}</ExpandStyle>
          </ThemeDescription>
        </ThemeBox>
        <ThemeBox>
          <ThemeTitle>#SAVEBUSINESSES</ThemeTitle>
          <ComputerStayHomeImage />
          <ThemeDescription expanded={saveBusinesses}>
            <p>
              The pandemic is having a real impact on our rural economies – our
              businesses, especially thosein tourism, services and food and
              drink industries are struggling. The markets and supply chains are
              disrupted by closures and lockdowns. Small and micro companies and
              self-employedare unable to survive. Adapting to post-corona times
              will also be a challenge.
            </p>
            <p>
              We need solutions on how to operate a safe business whilst
              practicing social distancing; how todiversify and innovate; how to
              reconfigure premises and production lines to ensure safety in the
              new environment.
            </p>
          </ThemeDescription>
          <ThemeDescription onClick={() => setSaveBusinesses(!saveBusinesses)}>
            <ExpandStyle>{saveBusinesses ? `-` : `+`}</ExpandStyle>
          </ThemeDescription>
        </ThemeBox>
        <ThemeBox>
          <ThemeTitle>#SAVECOMMUNITIES</ThemeTitle>
          <CityImage />
          <ThemeDescription expanded={saveCommunities}>
            <p>
              Social distancing is preventing us from spending time with friends
              and families. Birthday partiesand weddings are cancelled or
              postponed. Sporting activities and social events are banned.
              Schools and nurseries are closed. A lot of people are working from
              home and isolating.
            </p>
            <p>
              We need solutions on how to support citizens in rural areas with
              getting essential shopping; how to help parents working from home
              and balancing work, care and homeschooling responsibilities; how
              to support communities with their response to the pandemic.
            </p>
          </ThemeDescription>
          <ThemeDescription onClick={() => setSaveCommunities(!saveCommunities)}>
            <ExpandStyle>{saveCommunities ? `-` : `+`}</ExpandStyle>
          </ThemeDescription>
        </ThemeBox>
      </ThemesList>
    </ThemesContainer>
  )
}

const ThemesContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 40px 0;
  padding: 40px;
  background: #e8e8e8;
`

const ThemesTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`

const ThemesDescriptionStyle = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-size: 24px;
  text-align: center;
  margin: 20px 0;
`

const ThemesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

const ThemeBox = styled.div`
  flex: 1;
  position: relative;
  height: auto;
  left: 0;
`

const ThemeTitle = styled.div`
  color: #006eb6;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`

const ThemeDescription = styled.div`
  position: relative;
  top: -30px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  padding: 15px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  background: #006eb6;
  opacity: 0.9;
  line-height: 1.5;
  max-height: ${props => (props.expanded ? "100%" : "200px")};
  overflow: hidden;
`

const ExpandStyle = styled.div`
  font-size: 40px;
  text-align: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

export default Themes
