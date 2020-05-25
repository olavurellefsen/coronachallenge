import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageSection = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 90, maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return <ImageSectionStyle fluid={image.node.fluid} />
    }}
  />
)

const ImageSectionStyle = styled(Img)`
  width: 300px;
  height: 300px;
  max-width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  margin-bottom: 20px;
`

export default ImageSection
