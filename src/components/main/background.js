import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "rowing.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundSectionStyle
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      )
    }}
  />
)

const BackgroundSectionStyle = styled(BackgroundImage)`
  width: 100%;
  min-height: 560px;
  top: 0;
`

export default BackgroundSection
