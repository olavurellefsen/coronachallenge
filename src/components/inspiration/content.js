import React from "react"
import styled from "styled-components"
import { videolist } from "./videolist"

const Content = () => {
  return (
    <ContentContainer>
      <ContentTitleStyle>INSPIRATION</ContentTitleStyle>
      <DescriptionStyle>
        Please find below a number of videos from previous #hackthecrisis
        events. You can use these as inspiration for your own solutions.
      </DescriptionStyle>
      <VideoContainer>
        {videolist.map((video, i) => (
          <VideoBox key={i}>
            {video.youtubeid && (
                <YouTubeStyle
                src={`https://www.youtube.com/embed/${video.youtubeid}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            <TitleStyle>{video.title}</TitleStyle>
            <CompetitionStyle>{video.competition}</CompetitionStyle>
          </VideoBox>
        ))}
      </VideoContainer>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
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

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 92vw;
`

const VideoBox = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 0 40px 0;
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
  margin: 0 0 40px 0;
`

const YouTubeStyle = styled.iframe`
  margin: 0 auto;
  width: 90vw;
  height: 50.6vw;
`

export default Content
