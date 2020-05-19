import React from "react"
import styled from "styled-components"
import GirlWithMaskImage from "./girl-with-mask"
import ComputerStayHomeImage from "./computer-stay-home"
import CityImage from "./city"

const Themes = () => (
  <ThemesContainer>
    <ThemesTitleStyle>THREE THEMES</ThemesTitleStyle>
    <ThemesDescriptionStyle>
      The hackathon will focus on three main themes
    </ThemesDescriptionStyle>
    <ThemesList>
      <ThemeBox>
        <ThemeTitle>#SAVELIVES</ThemeTitle>
        <GirlWithMaskImage />
        <ThemeDescription>
          <ul>
            <li>Long distance to hospitals or medical care</li>
            <li>Hard to get medicines</li>
            <li>
              Mental health impact due to lockdowns and isolations, in
              particular in rural areas
            </li>
          </ul>
        </ThemeDescription>
      </ThemeBox>
      <ThemeBox>
        <ThemeTitle>#SAVEBUSINESSES</ThemeTitle>
        <ComputerStayHomeImage />
        <ThemeDescription>
          <ul>
            <li>
              {" "}
              Bills are stacking up whilst you are forced to stay away from
              work.
            </li>
            <li>The supply chains and markets are disrupted.</li>
            <li>
              Food and drink and tourism sectors are particularly badly
              affected, and these provide significant essential jobs and income
              for rural areas in the North Atlantic.
            </li>
            <li>
              Adapting to post-corona times - how to operate a safe business
              while practicing social distance (e.g. production lines and how
              they might need to reconfigured).
            </li>
          </ul>
        </ThemeDescription>
      </ThemeBox>
      <ThemeBox>
        <ThemeTitle>#SAVECOMMUNITIES</ThemeTitle>
        <CityImage />
        <ThemeDescription>
          <ul>
            <li>Difficult to get essentials because you are isolating</li>
            <li>
              You can’t meet your friends, grandparents or family in person.
            </li>
            <li>
              Balancing working from home with childcare and home-schooling
              responsibilities.
            </li>
          </ul>
        </ThemeDescription>
      </ThemeBox>
    </ThemesList>
  </ThemesContainer>
)

const ThemesContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
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
  justify-content: space-between;
  flex-wrap: wrap;
`

const ThemeBox = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px 10px;
  height: auto;
`

const ThemeTitle = styled.div`
  color: #006eb6;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  transform: translate(-10%, 0);
  margin-bottom: 20px;
`

const ThemeDescription = styled.div`
  position: relative;
  top: -30px;
  left: 20%;
  width: 80%;
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  color: white;
  background: #006eb6;
  opacity: 0.9;
  height: 600px;
`

export default Themes
