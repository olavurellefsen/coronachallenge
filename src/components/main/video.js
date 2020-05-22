import React from "react"
import styled from "styled-components"
import PromotionalVideo from "../../video/coronachallenge-intro.mp4"

const Content = () => (
  <VideoContainer>
    <ButtonStyle href="/video">INTRO VIDEO</ButtonStyle>
    <VideoStyle controls>
      <source src={`${PromotionalVideo}#t=1`} type="video/mp4" />
    </VideoStyle>
  </VideoContainer>
)

const VideoContainer = styled.div`
  margin: 0 5vw;
  overflow: hidden;
`

const VideoStyle = styled.video`
  max-width: 90vw;
`

const ButtonStyle = styled.a`
  display: block;
  position: relative;
  margin: 40px 10px;
  max-width: 400px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  opacity: 1;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
`

export default Content
