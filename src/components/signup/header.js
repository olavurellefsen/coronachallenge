import React from "react"
import Background from "./background"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer href="/">
    <Background />
    <Tag1Style>#CORONACHALLENGE</Tag1Style>
  </HeaderContainer>
)

const HeaderContainer = styled.a`
  position: static;
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
