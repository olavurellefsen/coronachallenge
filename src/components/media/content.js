import React from "react"
import styled from "styled-components"

const Content = () => {
  return (
    <ContentContainer>
      <ContentTitleStyle>MEDIA COVERAGE</ContentTitleStyle>
      <DescriptionStyle>
        Below is a selection of media articles about the event.
      </DescriptionStyle>
      <ContentTitle2Style>Scotland</ContentTitle2Style>
      <DescriptionStyle>
        The Highland Council:{" "}
        <LinkStyle href="https://www.highland.gov.uk/news/article/12532/north_atlantic_corona_challenge_2020_-_young_people_encouraged_to_take_part">
          North Atlantic Corona Challenge 2020 - young people encouraged to take
          part
        </LinkStyle>
      </DescriptionStyle>
      <DescriptionStyle>
        Strathspey {"&"} Badenoch Herald:{" "}
        <LinkStyle href="https://www.strathspey-herald.co.uk/news/highlanders-asked-will-you-take-the-coronavirus-challenge-200649/">
          Young Highlanders invited to take North Atlantic Corona Challenge
        </LinkStyle>
      </DescriptionStyle>
      <DescriptionStyle>
        John O'Groat Journal and Caithness Courier:{" "}
        <LinkStyle href="https://www.johnogroat-journal.co.uk/news/call-for-creative-young-people-to-enter-virtual-north-atlantic-corona-challenge-200647/">
          Call for creative young people to enter virtual North Atlantic Corona
          Challenge
        </LinkStyle>
      </DescriptionStyle>
      <ContentTitle2Style>Norway</ContentTitle2Style>
      <DescriptionStyle>
        NRK:{" "}
        <LinkStyle href="https://www.nrk.no/nordland/inviterer-ungdom-til-a-redde-liv-1.15027763">
          Inviterer ungdom til å redde liv
        </LinkStyle>
      </DescriptionStyle>
      <DescriptionStyle>
        Vesterålen Online:{" "}
        <LinkStyle href="https://www.vol.no/meninger/leserinnlegg/2020/05/22/%C2%ABDigital-utfordring-for-%C3%A5-motvirke-korona-konsekvensene%C2%BB-21899640.ece">
          Digital utfordring for å motvirke korona-konsekvensene
        </LinkStyle>
      </DescriptionStyle>
      <DescriptionStyle>
        High North News:{" "}
        <LinkStyle href="https://www.highnorthnews.com/nb/konkurranse-motvirke-ringvirkningene-av-covid-19">
          Konkurranse for å motvirke ringvirkningene av Covid-19
        </LinkStyle>
      </DescriptionStyle>
      <ContentTitle2Style>Faroe Islands</ContentTitle2Style>
      <DescriptionStyle>
        in.fo:{" "}
        <LinkStyle href="https://www.in.fo/longri-grein-detail-view/news/koronaavbjoding-leita-eftir-ungum-folki-vid-godum-hugskotum/">
          Koronaavbjóðing: Leita eftir ungum fólki við góðum hugskotum
        </LinkStyle>
      </DescriptionStyle>
      <ContentTitle2Style>Greenland</ContentTitle2Style>
      <DescriptionStyle>(Coming up)</DescriptionStyle>
      <ContentTitle2Style>Iceland</ContentTitle2Style>
      <DescriptionStyle>
        Byggðastofnun:{" "}
        <LinkStyle href="https://www.byggdastofnun.is/is/frettir/north-atlantic-corona-challenge-2020">
          North Atlantic Corona Challenge 2020
        </LinkStyle>
      </DescriptionStyle>
      <ContentTitle2Style>North Atlantic and Arctic region</ContentTitle2Style>
      <DescriptionStyle>
        Journal of the North Atlantic {"&"} Arctic:{" "}
        <LinkStyle href="https://www.jonaa.org/content/save-lives-businesses-communities-in-the-north-atlantic-corona-challenge">
          Save Lives, Businesses {"&"} Communities In The North Atlantic Corona
          Challenge
        </LinkStyle>
      </DescriptionStyle>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 0;
  padding: 60px 5vw 10px 5vw;
  background: #e8e8e8;
`

const ContentTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 0 0 20px 0;
`

const ContentTitle2Style = styled.div`
  color: #006eb6;
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  margin: 10px 0;
`

const DescriptionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 20px 0 20px 20px;
`

const LinkStyle = styled.a`
  color: black;
`

export default Content
