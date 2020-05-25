import React from "react"
import styled from "styled-components"

const JuryCriteria = () => (
  <JuryCriteriaContainer>
    <JuryCriteriaTitleStyle>JURY CRITERIA</JuryCriteriaTitleStyle>
    <JuryCriteriaTitle2Style>Originality</JuryCriteriaTitle2Style>
    <JuryCriteriaDescriptionStyle>
      The project needs to create new solutions or apply existing solutions in a
      new, innovative way
    </JuryCriteriaDescriptionStyle>
    <JuryCriteriaTitle2Style>Realistic</JuryCriteriaTitle2Style>
    <JuryCriteriaDescriptionStyle>
      The project must be realistic in terms of the legal, technological and
      scientific aspects of the solution. It should be possible to realize the
      project within a few months (exceptions can be made for particularly
      impactful solutions with a long-term perspective)
    </JuryCriteriaDescriptionStyle>
    <JuryCriteriaTitle2Style>Impact</JuryCriteriaTitle2Style>
    <JuryCriteriaDescriptionStyle>
      The project should make a real difference in the struggle to help local
      communities and/or companies in the North Atlantic region. It should make
      a significant positive change for a large number of people or for
      businesses particularly affected by the corona virus
    </JuryCriteriaDescriptionStyle>
    <JuryCriteriaDescriptionStyle>
      The project should be demand-led and with a commercial potential
    </JuryCriteriaDescriptionStyle>
    <ButtonStyle href="/jury">Jury</ButtonStyle>
    <ButtonStyle href="/mentors">Mentors</ButtonStyle>
  </JuryCriteriaContainer>
)

const JuryCriteriaContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 20px 5vw;
  background: #e8e8e8;
  padding: 40px 10px;
`

const JuryCriteriaTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 30px 0;
  padding: 20px 10px;
`

const JuryCriteriaTitle2Style = styled.div`
  color: #006eb6;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
`

const JuryCriteriaDescriptionStyle = styled.div`
  color: black;
  font-size: 24px;
  text-align: center;
  margin: 10px 0 30px 0;
  padding: 10px;
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

export default JuryCriteria
