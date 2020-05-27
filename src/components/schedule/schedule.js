import React from "react"
import styled from "styled-components"
import SeaOfIce from "../main/sea-of-ice"

const Content = ({ title = "DEFAULT TIME ZONE", offset = "0" }) => {
  offset = parseInt(offset)
  return (
    <EventScheduleContainer>
      <SeaOfIce />
      <EventScheduleTitleStyle>
        EVENT SCHEDULE
        <br />
        <SubtitleStyle>{title}</SubtitleStyle>
      </EventScheduleTitleStyle>
      <AllDaysContainer>
        <DayContainer>
          <DayTitleStyle>FRIDAY 29 MAY</DayTitleStyle>
          <ScheduleItemStyle>
            {18 + offset}:00 <LineStyle />
            <br />
            IDEA COLLECTION
            <br />
            <ToolStyle>Platform: Slack</ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {20 + offset}:00 <LineStyle />
            <br />
            KICK-OFF WEBINAR
            <br />
            <ToolStyle>
              Platform:{" "}
              <LinkStyle href="https://www.youtube.com/channel/UCNBcUvkdI6AAW-lyZn_9_Dg">
                YouTube
              </LinkStyle>
            </ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {20 + offset}:30 <LineStyle />
            <br />
            TEAMS ANNOUNCED
            <br />
            WORK STARTS
            <br />
            <ToolStyle>Platform: Slack</ToolStyle>
          </ScheduleItemStyle>
        </DayContainer>
        <DayContainer>
          <DayTitleStyle>SATURDAY 30 MAY</DayTitleStyle>
          <ScheduleItemStyle>
            {12 + offset}:00 <LineStyle />
            <br />
            MENTORING STARTS
            <br />
            <ToolStyle>Platform: Slack</ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {17 + offset}:00 <LineStyle />
            <br />
            MENTORING CHECKPOINT
            <br />
            <ToolStyle>Platform: Slack</ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {18 + offset}:00 <LineStyle />
            <br />
            PRELIMINARY SUBMISSION DEADLINE
            <br />
            <ToolStyle>Platform: Proposal Pot</ToolStyle>
          </ScheduleItemStyle>
        </DayContainer>
        <DayContainer>
          <DayTitleStyle>SUNDAY 31 MAY</DayTitleStyle>
          <ScheduleItemStyle>
            {11 + offset}:00 <LineStyle />
            <br />
            MENTORING CHECKPOINT
            <br />
            <ToolStyle>Platform: Slack</ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {14 + offset}:00 <LineStyle />
            <br />
            DEADLINE TO SUBMIT PROJECT RESULTS
            <br />
            <ToolStyle>Platform: Proposal Pot</ToolStyle>
          </ScheduleItemStyle>
          <ScheduleItemStyle>
            {17 + offset}:00-{18 + offset}:00 <LineStyle />
            <br />
            FINAL WEBINAR
            <br />
            <ToolStyle>
              Platform:{" "}
              <LinkStyle href="https://www.youtube.com/channel/UCNBcUvkdI6AAW-lyZn_9_Dg">
                YouTube
              </LinkStyle>
            </ToolStyle>
          </ScheduleItemStyle>
        </DayContainer>
      </AllDaysContainer>
    </EventScheduleContainer>
  )
}

const EventScheduleContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
  padding: 0;
`

const EventScheduleTitleStyle = styled.div`
  position: relative;
  margin: -560px 0 0 0;
  left: 50%;
  transform: translate(-50%, 0);
  color: #006eb6;
  font-size: 32px;
  font-weight: 600;
  opacity: 1;
  padding: 12px 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`

const SubtitleStyle = styled.span`
  font-size: 22px;
  color: red;
  font-weight: 600;
`

const AllDaysContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
`

const DayContainer = styled.div`
  margin: 10px;
  width: 325px;
  background: #006eb6;
  height: 550px;
`

const DayTitleStyle = styled.div`
  margin: 10px;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`

const ScheduleItemStyle = styled.div`
  margin: 20px;
  padding: 10px;
  background: white;
  color: #006eb6;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  height: 140px;
  line-height: 1.1;
`

const ToolStyle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 111, 182, 0.92);
`

const LinkStyle = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: rgba(0, 111, 182, 0.92);
`
const LineStyle = styled.hr`
  border-top: 1px solid #006eb6;
  margin: 5px;
`

export default Content
