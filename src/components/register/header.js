import React from "react"
import Background from "./background"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer>
    <Background />
    <Tag1Style>#PARTICIPANTS</Tag1Style>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Tag1Style = styled.div`
  position: absolute;
  top: 96px;
  right: 5%;
  transform: rotate(20deg);
  color: white;
  background: #006eb6;
  font-size: 20px;
  opacity: 1;
  padding: 12px 26px;
  text-transform: uppercase;
`

export default Header
