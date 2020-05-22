import React from "react"
import Background from "./background"
import styled from "styled-components"
import FacebookIcon from "../../images/facebook.svg";
import InstagramIcon from "../../images/instagram.svg";

const Header = () => (
  <HeaderContainer>
    <Background />
    <ProjectTitleStyle>North Atlantic Corona Challenge 2020</ProjectTitleStyle>
    <SocialMediaContainer>
      <IconStyle href="https://www.facebook.com/coronachallenge" aria-label="Facebook"><FacebookIcon /></IconStyle>
      <IconStyle href="https://www.instagram.com/coronachallenge.fo/" aria-label="Instagram"><InstagramIcon /></IconStyle>
    </SocialMediaContainer>
    <Tag1Style>#NorthAtlantic</Tag1Style>
    <Tag2Style>#CORONACHALLENGE</Tag2Style>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const ProjectTitleStyle = styled.div`
  position: absolute;
  top: 100px;
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

const SocialMediaContainer = styled.div`
  display: flex;
  position: absolute;
  top: 510px;
  left: 50%;
  transform: translate(-50%, 0);
`

const IconStyle = styled.a`
  width: 34px;
  margin: 0 10px;
`

const Tag1Style = styled.div`
  position: absolute;
  top: 350px;
  right: 5%;
  transform: rotate(20deg);
  color: white;
  background: #006eb6;
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
  padding: 12px 26px;
  text-transform: uppercase;
`

const Tag2Style = styled.div`
  position: absolute;
  top: 450px;
  right: 5%;
  transform: rotate(20deg);
  color: white;
  background: #ff0000;
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
  padding: 12px 26px;
  text-transform: uppercase;
`

export default Header
