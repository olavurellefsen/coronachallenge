import React from "react"
import { elastic as Menu } from "react-burger-menu"

const BurgerMenu = () => (
  <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
    <a id="home" className="menu-item" href="/">
      Home
    </a>
    <a id="signup" className="menu-item" href="/signup">
      Sign up
    </a>
    <a id="inspiration" className="menu-item" href="/inspiration">
      Inspiration
    </a>
    <a id="speaker" className="menu-item" href="/speaker">
      Speaker
    </a>
    <a id="video" className="menu-item" href="/video">
      Intro video
    </a>
    <a id="media" className="menu-item" href="/media">
      Media coverage
    </a>
    <a id="jury" className="menu-item" href="/jury">
      Jury
    </a>
    <a id="mentors" className="menu-item" href="/mentors">
      Mentors
    </a>
    <a id="privacypolicy" className="menu-item" href="/privacypolicy">
      Privacy Policy
    </a>
    <a id="rules" className="menu-item" href="/rules">
      Rules and
      <br />
      Code of Conduct
    </a>
    <a id="contactus" className="menu-item" href="#aboutus">
      Contact us
    </a>
  </Menu>
)

export default BurgerMenu
