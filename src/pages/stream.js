// Gatsby supports TypeScript natively!
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../images/girl-smartphone-beach-dark-1200x630.jpg"

const SecondPage = () => {
  console.log(process.env.GATSBY_X_VIDEO_ID)
  return (
    <Layout>
      <SEO
        title="Streaming"
        image={{ src: Image, width: 1200, height: 630 }}
        pathname="/stream"
      />
      <ContainerStyle>
        <YouTubeStyle
          src={`https://www.youtube.com/embed/${process.env.GATSBY_X_VIDEO_ID}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ContainerStyle>
    </Layout>
  )
}

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const YouTubeStyle = styled.iframe`
  margin: 0 auto;
  width: 90vw;
  height: 50.6vw;
`

export default SecondPage
