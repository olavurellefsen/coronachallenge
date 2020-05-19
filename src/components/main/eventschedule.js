import React from "react"
import styled from "styled-components"
import SeaOfIce from "./sea-of-ice"

const EventSchedule = () => (
  <EventScheduleContainer>
    <SeaOfIce />
    <EventScheduleTitleStyle>
      EVENT SCHEDULE
      <br />
      <SubtitleStyle>UTC TIME ZONE</SubtitleStyle>
    </EventScheduleTitleStyle>
    <AllDaysContainer>
      <DayContainer>
        <DayTitleStyle>FRIDAY 29 MAY</DayTitleStyle>
        <ScheduleItemStyle>
          18:00 <LineStyle />
          <br />
          IDEA COLLECTION
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          20:00 <LineStyle />
          <br />
          KICK-OFF WEBINAR
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          20:30 <LineStyle />
          <br />
          TEAMS ANNOUNCED
          <br />
          WORK STARTS
        </ScheduleItemStyle>
      </DayContainer>
      <DayContainer>
        <DayTitleStyle>SATURDAY 30 MAY</DayTitleStyle>
        <ScheduleItemStyle>
          12:00 <LineStyle />
          <br />
          MENTORING STARTS
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          17:00 <LineStyle />
          <br />
          MENTORING CHECKPOINT
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          18:00 <LineStyle />
          <br />
          PRELIMINARY SUBMISSION DEADLINE
        </ScheduleItemStyle>
      </DayContainer>
      <DayContainer>
        <DayTitleStyle>SUNDAY 31 MAY</DayTitleStyle>
        <ScheduleItemStyle>
          15:00 <LineStyle />
          <br />
          DEADLINE TO SUBMIT PROJECT RESULTS.
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          17:00 <LineStyle />
          <br />
          FINAL WEBINAR
        </ScheduleItemStyle>
        <ScheduleItemStyle>
          18:00 <LineStyle />
          <br />
          EVENT ENDS
        </ScheduleItemStyle>
      </DayContainer>
    </AllDaysContainer>
  </EventScheduleContainer>
)

const EventScheduleContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
  padding: 0;
`

const EventScheduleTitleStyle = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #006eb6;
  font-size: 32px;
  font-weight: 600;
  opacity: 1;
  margin: 0;
  padding: 12px 0;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`

const SubtitleStyle = styled.span`
  font-size: 22px;
`

const AllDaysContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 150px;
  width: 100%;
  flex-wrap: wrap;
`

const DayContainer = styled.div`
  margin: 10px;
  width: 325px;
  background: #006eb6;
  height: 500px;
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
  height: 120px;
  line-height: 1.1;
`

const LineStyle = styled.hr`
  border-top: 1px solid #006eb6;
  margin: 5px;
`

export default EventSchedule
