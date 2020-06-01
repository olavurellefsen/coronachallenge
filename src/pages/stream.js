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
        <TitleStyle>Opening webinar - Live streaming 29 May 2020</TitleStyle>
        <DescriptionStyle>
          The opening webinar of the North Atlantic Corona Challenge 2020 with
          keynote speaker Heini Zachariassen. Hosts: Jákup Justinussen and
          Øystein Andresen.
        </DescriptionStyle>
        <DescriptionStyle>
          <YouTubeStyle
            src="https://www.youtube.com/embed/QPmZnbDU7wE?start=1192"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DescriptionStyle>
        <TitleStyle>Closing webinar - Live streaming 31 May 2020</TitleStyle>
        <DescriptionStyle>
          The closing webinar of the North Atlantic Corona Challenge 2020 with
          the four winning projects presented by judge chair Christian Wennecke.
          Hosts: Jákup Justinussen and Øystein Andresen.
        </DescriptionStyle>
        <DescriptionStyle>
          <YouTubeStyle
            src="https://www.youtube.com/embed/B0R3wnOLpU0?start=504"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </DescriptionStyle>
      </ContainerStyle>
    </Layout>
  )
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TitleStyle = styled.div`
  color: #006eb6;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0;
`

const DescriptionStyle = styled.div`
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: 48px;
`

const YouTubeStyle = styled.iframe`
  margin: 20px;
  width: 90vw;
  height: 50.6vw;
  max-width: 1400px;
  max-height: 787px;
`

export default SecondPage
