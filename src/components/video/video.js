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
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1608px;
  margin: 40px 0;
  overflow-y: hidden;
`

const VideoStyle = styled.video`
  max-width: 100vw;
`

export default Content
