import React from "react"
import styled from "styled-components"
import PromotionalVideo from "../../video/coronachallenge-intro.mp4"

const Content = () => (
  <VideoContainer>
    <VideoStyle controls>
      <source src={`${PromotionalVideo}#t=1`} type="video/mp4" />
    </VideoStyle>
  </VideoContainer>
)

const VideoContainer = styled.div`
  margin: 40px 5vw 0 5vw;
  overflow-y: hidden;
`

const VideoStyle = styled.video`
  max-width: 90vw;
`

export default Content
