import React from "react"
import Background from "./background"
import styled from "styled-components"
import FacebookIcon from "../../images/facebook.svg";
import InstagramIcon from "../../images/instagram.svg";

const Header = () => (
  <HeaderContainer href="/">
    <Background />
    <ProjectTitleStyle>North Atlantic Corona Challenge 2020</ProjectTitleStyle>
    <SocialMediaContainer>
      <IconStyle href="https://www.facebook.com/coronachallenge" aria-label="Facebook"><FacebookIcon /></IconStyle>
      <IconStyle href="https://www.instagram.com/coronachallenge.fo/" aria-label="Instagram"><InstagramIcon /></IconStyle>
    </SocialMediaContainer>
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
  top: 40px;
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
  top: 250px;
  left: 50%;
  transform: translate(-50%, 0);
`

const IconStyle = styled.a`
  width: 34px;
  margin: 0 10px;
`

export default Header
