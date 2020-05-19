import React from "react"
import styled from "styled-components"
import JumpFromShip from "./jump-from-ship"

const TargetGroup = () => (
  <TargetGroupContainer>
    <JumpFromShip />
    <WhoCanStyle>WHO CAN PARTICIPATE?</WhoCanStyle>
    <TargetGroupDescriptionStyle>
      We welcome all participants from Greenland, Iceland, Faroe Islands,
      Scotland and Coastal Norway (counties bordering the Atlantic Ocean).
      Especially young people between 18 and 30 years of age are encouraged to
      join. All backgrounds are relevant - the main point about North Atlantic
      Corona Challenge is your idea !
    </TargetGroupDescriptionStyle>
  </TargetGroupContainer>
)

const TargetGroupContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
  padding: 0;
`

const WhoCanStyle = styled.div`
  position: absolute;
  top: 326px;
  left: 15%;
  transform: rotate(-20deg);
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  opacity: 1;
  padding: 12px;
  max-width: 70vw;
  text-transform: uppercase;
`

const TargetGroupDescriptionStyle = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30vw;
  padding: 10px;
  min-width: 300px;
  color: black;
  background: white;
  opacity: 0.78;
  font-size: px;
  text-align: center;
`

export default TargetGroup
