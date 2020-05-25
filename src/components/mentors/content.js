import React from "react"
import styled from "styled-components"
import { mentorlist } from "./mentorlist"
import MentorImage from "./MentorImage"

const Content = () => {
  return (
    <ContentContainer>
      <ContentTitleStyle>MENTORS</ContentTitleStyle>
      <MentorContainer>
        {mentorlist.map((mentor, i) => (
          <MentorBox key={i}>
            {mentor.image && <MentorImage imgName={mentor.image} />}
            {!mentor.image && <PlaceholderImage />}
            <NameCountryBox>
              <NameStyle>{mentor.name}</NameStyle>
              <CountryStyle>{mentor.country}</CountryStyle>
            </NameCountryBox>
            <PositionStyle>{mentor.position}</PositionStyle>
          </MentorBox>
        ))}
      </MentorContainer>
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

const MentorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const MentorBox = styled.div`
  width: 325px;
  max-width: 325px;
  margin: 0 20px 20px 0;
  padding: 10px;
  background: #ccc;
`

const PlaceholderImage = styled.div`
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  max-height: 300px;
  background: #ddd;
  margin-bottom: 20px;
`

const NameCountryBox = styled.div`
  height: 100px;
`

const NameStyle = styled.div`
  color: #006eb6;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
`

const CountryStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 0;
`

const PositionStyle = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 0;
  padding-top: 10px;
`

export default Content
