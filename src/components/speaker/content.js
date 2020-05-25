import React from "react"
import styled from "styled-components"
import YouTube from "react-youtube"
import Heini from "./heini"

const Content = () => {
  return (
    <ContentContainer>
      <ContentTitleStyle>SPEAKER</ContentTitleStyle>
      <DescriptionStyle>
        The Corona Challenge will kick off on Friday 29 May 2020 20:00 UTC by
        Heini Zachariassen, an entrepreneur from the Faroe Islands.
      </DescriptionStyle>
      <Heini />
      <DescriptionStyle>
        Heini Zachariassen is the founder and CEO of Vivino, which provides
        users with any wine's rating, review and average price. Vivino is also
        the world’s largest wine community, claiming more than 15 million users.
      </DescriptionStyle>
      <DescriptionStyle>
        Having co-founded several startups, including antivirus software company
        BullGuard, Heini Zachariassen has a varied background in software
        development and mobile innovation and a track record for building
        successful global businesses. He leads the team from Vivino’s
        headquarters in San Francisco.
      </DescriptionStyle>
      <YouTube
        videoId="_nNutnR9aKk"
        opts={{
          height: "183",
          width: "325",
          position: "relative",
        }}
      />
      <DescriptionStyle>
        Heini Zachariassen also hosts the YouTube channel{" "}
        <a href="https://www.youtube.com/channel/UCHiSUe3Bo5cRMhE6BjttNUA">
          Raw Startup
        </a>{" "}
        - helping builders change the world.
      </DescriptionStyle>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  margin: 540px 0 0 0;
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

const DescriptionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 20px 0;
`

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const VideoBox = styled.div`
  width: 350px;
  max-width: 350px;
  margin: 0 20px 20px 0;
  padding: 10px;
  background: #ccc;
`

const TitleStyle = styled.div`
  color: #006eb6;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
`

const CompetitionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 0;
`

export default Content
