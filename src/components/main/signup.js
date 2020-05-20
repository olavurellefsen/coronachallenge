import React from "react"
import styled from "styled-components"

const Signup = () => (
  <SignupContainer>
    <SignupTitleStyle>
      YOU CAN PARTICIPATE AND
      <br />
      WIN 30,000 DKK
    </SignupTitleStyle>
    <SignupDescriptionStyle>
      Do you want to participate in this North Atlantic challenge? Sign up and
      join the fun!
    </SignupDescriptionStyle>
  </SignupContainer>
)

const SignupContainer = styled.div`
  position: relative;
  max-width: 1608px;
  margin: 40px 5vw;
  padding: 40px;
  background: #e8e8e8;
`

const SignupTitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`

const SignupDescriptionStyle = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
`

export default Signup
