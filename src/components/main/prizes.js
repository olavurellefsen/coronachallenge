import React from "react"
import styled from "styled-components"

const Prizes = () => (
  <PrizesContainer>
    <PrizesTitleStyle>PRIZES</PrizesTitleStyle>
    <PrizesButtonStyle>
      1st prize
      <LineStyle />
      <br />
      30,000 DKK
    </PrizesButtonStyle>
    <PrizesButtonStyle>
      2nd prize
      <LineStyle />
      <br />
      20,000 DKK
    </PrizesButtonStyle>
    <PrizesButtonStyle>
      3rd prize
      <LineStyle />
      <br />
      10,000 DKK
    </PrizesButtonStyle>
    <PrizesTitleStyle>ADDITIONAL PRIZE</PrizesTitleStyle>
    <PrizesDescriptionStyle>
      Highlands and Islands Enterprise´s (HIE) entrepreneurship support to the winning team with a Highlands and
      Islands participant (up to 2 days of the most appropriate business
      development support)
    </PrizesDescriptionStyle>
  </PrizesContainer>
)

const PrizesContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
  padding: 40px;
  background: #e8e8e8;
`

const PrizesTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`

const PrizesDescriptionStyle = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
`

const PrizesButtonStyle = styled.div`
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
  opacity: 1;
  padding: 16px 20px;
  text-align: center;
`

const LineStyle = styled.hr`
  border-top: 1px solid rgb(255, 255, 255, 0.5);
  margin: 5px;
`

export default Prizes
