import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "nora-logo.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return <ImageSectionStyle fluid={imageData} />
    }}
  />
)

const ImageSectionStyle = styled(BackgroundImage)`
  min-width: 300px;
  min-height: 110px;
  width: 300px;
  height: 110px;
  max-width: 84vw;
  max-height: 30.8vw;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 10px 0;
`

export default ImageSection
