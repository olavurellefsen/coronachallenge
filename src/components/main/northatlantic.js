import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "northatlantic.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
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
  min-width: 288px;
  min-height: 180px;
  width: 960px;
  height: 600px;
  max-width: 84vw;
  max-height: 52.5vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`

export default Background
