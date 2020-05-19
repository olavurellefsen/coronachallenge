import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ImageSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "computer-stay-home.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 512) {
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
  width: 320px;
  height: 285px;
  max-width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`

export default ImageSection
