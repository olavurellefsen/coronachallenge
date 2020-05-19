import React from "react"
import Background from "./background"
import styled from "styled-components"

const Header = () => (
  <HeaderContainer>
    <Background />
    <ProjectTitleStyle>North Atlantic Corona Challenge 2020</ProjectTitleStyle>
    <SocialMediaContainer>
      <a href="https://facebook.com/toknifo"><FacebookIconStyle src="/facebook.svg" alt="Facebook page" /></a>
      <a href="https://instagram.com"><InstagramIconStyle src="/instagram.svg" alt="Instagram page" /></a>
    </SocialMediaContainer>
    <Tag1Style>#NorthAtlantic</Tag1Style>
    <Tag2Style>#HackTheCrisis</Tag2Style>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const ProjectTitleStyle = styled.div`
  position: absolute;
  top: 376px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  background: #006eb6;
  font-size: 32px;
  opacity: 0.9;
  padding: 16px 20px;
  text-transform: uppercase;
`

const SocialMediaContainer = styled.div`
  position: absolute;
  top: 495px;
  left: 50%;
  transform: translate(-50%, 0);
`

const FacebookIconStyle = styled.img`
  background: white;
  border-radius: 17px;
  width: 34px;
  border: solid 2px white;
  margin: 0 10px;
`

const InstagramIconStyle = styled.img`
  background: #006eb6;
  border-radius: 8px;
  width: 34px;
  margin: 0 10px;
`

const Tag1Style = styled.div`
  position: absolute;
  top: 96px;
  right: 1%;
  transform: rotate(20deg);
  color: white;
  background: #006eb6;
  font-size: 30px;
  opacity: 1;
  padding: 12px 26px;
  text-transform: uppercase;
`

const Tag2Style = styled.div`
  position: absolute;
  top: 206px;
  right: 1%;
  transform: rotate(20deg);
  color: white;
  background: #ff0000;
  font-size: 30px;
  opacity: 1;
  padding: 12px 26px;
  text-transform: uppercase;
`

export default Header
