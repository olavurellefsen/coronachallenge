import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import BurgerMenu from "./menu.js"

const Layout = ({ children }) => (
  <div id="outer-container">
    <BurgerMenu />
    <main id="page-wrap">{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
