import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
