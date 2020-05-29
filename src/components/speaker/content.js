import React from "react"
import styled from "styled-components"
import Heini from "./heini"

const Content = () => {
  return (
    <ContentContainer>
      <ContentTitleStyle>SPEAKER</ContentTitleStyle>
      <DescriptionStyle>
        The Corona Challenge kicked off on Friday 29 May 2020 20:00 UTC with an{" "}
        <a href="https://www.youtube.com/watch?v=QPmZnbDU7wE">
          inspirational talk
        </a>{" "}
        from Heini Zachariassen, an entrepreneur from the Faroe Islands.
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
      <YouTubeStyle
        src="https://www.youtube.com/embed/_nNutnR9aKk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
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

const DescriptionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 20px 0;
`

const YouTubeStyle = styled.iframe`
  width: 90vw;
  height: 50.6vw;
  max-width: 1400px;
  max-height: 787px;
`

export default Content
