import React from "react"
import Background from "./background"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer href="/">
    <Background />
    <ProjectTitleStyle>North Atlantic Corona Challenge</ProjectTitleStyle>
    <Tag1Style>#CORONACHALLENGE</Tag1Style>
  </HeaderContainer>
)

const HeaderContainer = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const ProjectTitleStyle = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  background: #006eb6;
  font-size: 28px;
  font-weight: 600;
  opacity: 0.9;
  padding: 16px 20px;
  text-transform: uppercase;
  text-align: center;
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
